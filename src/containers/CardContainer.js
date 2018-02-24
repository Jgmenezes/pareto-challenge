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
    }

    /* atualizar textarea */
    handleUpdateTextarea = (e, id, counter) => {
        e.preventDefault();
        const textAreaobj = {
            id: id,
            tag: <Textarea key={`${this.props.cardNumber}--${counter}`}
                cardNumber={this.props.cardNumber}
                contador={this.state.contador - 1}
                onStartDrag={this.onDragStart}
                onCardDrop={this.onCardDrop}
                handleUpdateTextarea={e => this.handleUpdateTextarea(e, id, counter)} 
                fixedCounter={counter} />,
            text: e.target.value,
            fixedCounter: counter
        }
        this.props.updateCard(textAreaobj)
    }

    /* criar novo textarea */
    handleAddTextarea = (cardNumber) => {
        const textAreaobj = {
            id: `${this.props.cardNumber}${this.state.contador}`,
            tag: <Textarea key={`${this.props.cardNumber}--${this.state.contador}`}
                cardNumber={this.props.cardNumber}
                contador={this.state.contador}
                onStartDrag={this.onDragStart}
                onCardDrop={this.onCardDrop}
                handleUpdateTextarea={e => this.handleUpdateTextarea(e, textAreaobj.id, textAreaobj.fixedCounter)} />,
            text: '',
            fixedCounter: this.state.contador
        }
        this.props.createCard(textAreaobj);
        this.setState({
            contador: this.state.contador + 1
        });
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    onDragStart = (e, id) => {
        e.dataTransfer.dropEffect = "move"; //armazenando os dados a serem transferidos
        e.dataTransfer.setData("text", [e,'###',id]);
    }

    onCardDrop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain").split(",###,")[0]; //data do card arrastado
        const id = e.dataTransfer.getData("text/plain").split(",###,")[1]; //id do card arrastado
        /* montando um novo elemento p ser adicionado */
        if (e.target.id !== "") {
            const textAreaobj = {
                id: e.target.id,
                text: e.target.value,
                cardNumberTarget: e.target.id,
                tag: <Textarea key={`${this.props.cardNumber - 1}--${e.target.id}`}
                    cardNumber={this.props.cardNumber}
                    contador={this.state.contador - 1}
                    onStartDrag={this.onDragStart}
                    onCardDrop={this.onCardDrop}
                    handleUpdateTextarea={e => this.handleUpdateTextarea(e, textAreaobj.id, textAreaobj.fixedCounter)}
                    content={data} />,
            }
            /* removendo o item do array do card que foi arrastado */
            this.props.deleteCard(e.target.id,);

            /* adicionando o elemento na nova lista */
            console.log(textAreaobj)
            this.props.createCard(textAreaobj);
        }
        else {
            console.log('saas')
        }
    }

    render() {
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

