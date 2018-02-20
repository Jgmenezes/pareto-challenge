import React from 'react';
import '../styles/Card.css';

const Card = ({title, cardNumber}) => {
    return (
        <div className={`card card--${cardNumber}`}>
            <h1 className="card__title">{title}</h1>
            <ul className="card__list">
                <li className="list__item">
                    <input type="text" className="item__input" />
                </li>
            </ul>
        </div>
    )
}

export default Card;