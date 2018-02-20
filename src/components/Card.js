import React from 'react';
import '../styles/Card.css';

const Card = ({title, cardNumber}) => {
    return (
        <div className={`card card--${cardNumber}`}>
            <h1 className="card__title">{title}</h1>
            <ul className="card__list">
                <li className="list__item">
                    <textarea name="" id="" cols="30" rows="4" placeholder='Descrição' className='item__input'></textarea>
                </li>
            </ul>
            <a href="#" className='card__link'>add a card +</a>
        </div>
    )
}

export default Card;