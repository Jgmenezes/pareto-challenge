import React, { Component } from 'react';
import '../styles/Textarea.css';

class Textarea extends Component {
    allowDrop = ev => {
        ev.preventDefault();
    }

    render() {
        const fixedCounter = this.props.contador;
        const identificador = `${this.props.cardNumber}${this.props.contador}`;
        return (
            <textarea
                cols='30'
                rows='4'
                placeholder='Descrição'
                className={`item__input item__input--${this.props.cardNumber}--${this.props.contador}`}
                onBlur={this.props.handleUpdateTextarea}
                draggable="true"
                onDragOver={this.allowDrop}
                onDragStart={e => this.props.onStartDrag(e, identificador, fixedCounter)}
            >
                {this.props.content}
            </textarea>
        )
    }
}

export default Textarea