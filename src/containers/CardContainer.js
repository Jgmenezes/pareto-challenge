import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const cardList = document.querySelector(`.card__list--${cardNumber}`); // card correspondente
        const textarea = `<textarea cols="30" rows="4" placeholder='Descrição' class='item__input item__input--${cardNumber}--${this.state.contador}'></textarea>`; // textarea a ser adicionada
        const list = document.createElement('li');
        list.className = 'list__item';
        list.innerHTML = textarea; //adicionando o textarea no elemento li
        cardList.appendChild(list); //inserindo li + textarea no card
        document.querySelector(`.item__input--${cardNumber}--${this.state.contador}`).focus(); // focando no textarea após ser criado
        this.setState({ contador: this.state.contador + 1 }); // alterando o contador para tornar a class do próximo textarea única
    }    

    render() {
        const { items } = this.props.allItems;
        console.log(items);
        
        return (
            <div>
                <Card title='TODO' cardNumber={1} createCard={() => this.createCard(1)} />
                <Card title='DOING' cardNumber={2} createCard={() => this.createCard(2)} />
                <Card title='DONE' cardNumber={3} createCard={() => this.createCard(3)} />
            </div>
        )
    }
}

const mapStateToProps = state => ({allItems: state.cardState})
export default connect(mapStateToProps)(CardContainer)
