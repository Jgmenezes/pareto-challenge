import React, { Component } from 'react';
import Card from '../components/Card';
import Textarea from '../components/Textarea';

class CardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addButtonClicked: false,
            contador: 0,
            arrayCard1: [],
            arrayCard2: [],
            arrayCard3: []
        };
    }

    handleAddTextarea = (cardNumber) => {
        if (cardNumber === 1) {
            const joined1 = this.state.arrayCard1.concat(<Textarea key={`${this.props.cardNumber}--${this.state.contador}`} cardNumber={this.props.cardNumber} contador={this.state.contador} />)
            this.setState({
                addButtonClicked: true,
                contador: this.state.contador + 1,
                arrayCard1: joined1
            });
        }

        if (cardNumber === 2) {
            const joined2 = this.state.arrayCard2.concat(<Textarea key={`${this.props.cardNumber}--${this.state.contador}`} cardNumber={this.props.cardNumber} contador={this.state.contador} />)
            this.setState({
                addButtonClicked: true,
                contador: this.state.contador + 1,
                arrayCard2: joined2
            });
        }

        if (cardNumber === 3) {
            const joined3 = this.state.arrayCard3.concat(<Textarea key={`${this.props.cardNumber}--${this.state.contador}`} cardNumber={this.props.cardNumber} contador={this.state.contador} />)
            this.setState({
                addButtonClicked: true,
                contador: this.state.contador + 1,
                arrayCard3: joined3
            });
        }
        /* focus no textarea após ser criado */
        setTimeout(() => { document.querySelector(`.item__input--${this.props.cardNumber}--${this.state.contador - 1}`).focus() }, 100);
    }

    render() {
        const string = 'arrayCard'+this.props.cardNumber;
        return (
            <Card cardNumber={this.props.cardNumber} title={this.props.title} addButtonClicked={this.state.addButtonClicked} textareas={this.state[string]} handleAddTextarea={this.handleAddTextarea} />
        )
    }
}

export default CardContainer

