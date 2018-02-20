import React, { Component } from 'react';
import Card from '../components/Card';

class CardContainer extends Component {
    constructor() {
        super();

        this.state = {
            contador: 0
        };
    }

    /* adicionando um item (card) na lista (interface) */
    createCard(cardNumber) {
        const cardList = document.querySelector(`.card__list--${cardNumber}`); //adiciona no card correspondente
        cardList.insertAdjacentHTML('beforeEnd', `<textarea cols="30" rows="4" placeholder='Descrição' class='item__input item__input--${cardNumber}--${this.state.contador}'></textarea>`); //inserindo textarea no card
        document.querySelector(`.item__input--${cardNumber}--${this.state.contador}`).focus(); //focando no textarea após ser criado
        this.setState({ contador: this.state.contador + 1 }); //alterando o contador para tornar a class do próximo textarea única
    }

    /* adicionando um item no array */
    

    render() {
        return (
            <div>
                <Card title='TODO' cardNumber={1} createCard={() => this.createCard(1)}/>
                <Card title='DOING' cardNumber={2} createCard={() => this.createCard(2)}/>
                <Card title='DONE' cardNumber={3} createCard={() => this.createCard(3)}/>
            </div>
        )
    }
}

export default CardContainer
