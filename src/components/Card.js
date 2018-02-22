import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
    return ( 
        <div className={`card card--${props.cardNumber}`}>
                <h1 className='card__title'>{props.title}</h1>
                <ul className={`card__list card__list--${props.cardNumber}`}>
                    {
                        // se o botão for clicado, deve aparecer os textareas
                        props.addButtonClicked && props.textareas.length > 0 ? props.textareas : ''
                    }
                </ul>
                <a className='card__link' onClick={() => props.handleAddTextarea(props.cardNumber)} >add a card +</a>
            </div>
    )
}

export default Card