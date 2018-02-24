import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className={`card card--${props.cardNumber}`} 
             onDragOver={props.allowDrop} 
             onDrop={props.onCardDrop}
             id={props.cardNumber}>
            <h1 className='card__title'>{props.title}</h1>
            <ul className={`card__list card__list--${props.cardNumber}`} >
                {
                    // se o botão for clicado, deve aparecer os textareas
                    props.textAreaItems.length > 0 ? props.textAreaItems.map(item => item.tag) : ''
                }
            </ul>
            <a className='card__link' onClick={() => props.handleAddTextarea(props.cardNumber)}> add a card +</a>
        </div>
    )
}

export default Card