import React from 'react';
import '../styles/Textarea.css';

const Textarea = props => {
    return (
        <textarea
            cols='30'
            rows='4'
            placeholder='Descrição'
            className='item__input'
            onBlur={props.handleUpdateTextarea}
            draggable="true"
            onDragOver={props.allowDrop}
            onDragStart={props.onDragStart}
            id={props.id}
            defaultValue={props.content}
        >
        </textarea>
    )
}

export default Textarea
