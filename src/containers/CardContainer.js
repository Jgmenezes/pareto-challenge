import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCard, updateCard, deleteCard } from '../actions/CardAction';
import Card from '../components/Card';
import Textarea from '../components/Textarea';

class CardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addButtonClicked: false,
            contador: 0
        };

        this.handleAddTextarea = this.handleAddTextarea.bind(this);
        this.handleUpdateTextarea = this.handleUpdateTextarea.bind(this);
    }

    /* atualizar textarea */
    handleUpdateTextarea = (e, id, counter, cardNumber) => {
        e.preventDefault();
        const txtAreaObj = {
            id: id,
            text: e.target.value,
            fixedCounter: counter,
            tag: <Textarea
                key={e.target.value}
                onDragStart={this.onDragStart}
                handleAddTextarea={() => this.handleAddTextarea(cardNumber)}
                handleUpdateTextarea={e => this.handleUpdateTextarea(e, `${this.props.cardNumber}${this.state.contador}`, this.state.contador)}
                id={id}
                content={e.target.value}
                allowDrop={this.allowDrop}
            />
        }
        /* chamando a action */
        this.props.updateCard(txtAreaObj)
    }

    /* criar novo textarea */
    handleAddTextarea = (cardNumber) => {
        const txtAreaObj = {
            id: `${cardNumber}${this.state.contador}`,
            text: '',
            fixedCounter: this.state.contador,
            tag: <Textarea
                key={`${cardNumber}${this.state.contador}`}
                onDragStart={this.onDragStart}
                handleAddTextarea={() => this.handleAddTextarea(cardNumber)}
                handleUpdateTextarea={e => this.handleUpdateTextarea(e, `${cardNumber}${this.state.contador}`, this.state.contador, cardNumber)}
                id={`${cardNumber}${this.state.contador}`}
                allowDrop={this.allowDrop}
            />
        }
        /* chamando a action */
        this.props.createCard(txtAreaObj);
        this.setState({
            contador: this.state.contador + 1
        });
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    /* invocado quando um card é arrastado */
    onDragStart = e => {
        const datas = [e.target.value, e.target.id];
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("Text", datas);
    }

    /* invocado quando um card é largado */
    onCardDrop = e => {
        e.preventDefault();
        const newCardNumber = e.target.id;
        const datas = e.dataTransfer.getData("text").split(",");
        const value = datas[0];
        const id = datas[1];
        const fixedCounter = id.substring(1, id.length);
        const cardNumber = id.substring(0, 1);
        const newId = newCardNumber + '' + fixedCounter;

        /* se tentar arrastar para outro card */
        if (newCardNumber !== '') {
            const txtAreaObj = {
                id: newId,
                text: value,
                fixedCounter: fixedCounter,
                tag: <Textarea
                    key={`${value}${newId}`}
                    onDragStart={this.onDragStart}
                    handleAddTextarea={() => this.handleAddTextarea(newCardNumber)}
                    handleUpdateTextarea={e => this.handleUpdateTextarea(e, `${newCardNumber}${fixedCounter}`, fixedCounter, newCardNumber)}
                    id={newId}
                    content={value}
                    allowDrop={this.allowDrop}
                />
            }

            /* excluindo card da respectiva lista */
            this.props.deleteCard(id);

            /* adicionando card na nova lista */
            this.props.createCard(txtAreaObj);
        }   
        /* se tentar arrastar para o mesmo card não faz nada*/
        else
            return         
    }

    render() {
        /* nome do respectivo array no reducer */
        const reducerArrayName = `itemsCard${this.props.cardNumber}`;

        return (
            <Card cardNumber={this.props.cardNumber}
                title={this.props.title}
                addButtonClicked={this.state.addButtonClicked}
                textAreaItems={this.props.allItems[reducerArrayName]}
                handleAddTextarea={this.handleAddTextarea}
                allowDrop={this.allowDrop}
                onCardDrop={this.onCardDrop}
            />
        )
    }
}

const mapStateToProps = state => ({ allItems: state.cardState })
const mapDispatchToProps = dispatch => bindActionCreators({ createCard, updateCard, deleteCard }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)

