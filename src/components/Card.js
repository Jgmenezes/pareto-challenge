import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className={`card card--${props.cardNumber}`}>
            <h1 className="card__title">{props.title}</h1>
            <ul className={`card__list card__list--${props.cardNumber}`}></ul>
            <a href="#" className='card__link' onClick={props.createCard}>add a card +</a>
        </div>
    )
}

export default Card;