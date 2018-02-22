import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCard } from '../actions/CardAction';
import '../styles/Textarea.css';

class Textarea extends Component {
    constructor(props) {
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(e) {
        this.props.createCard(e.target.value);
    }

    render() {
        return (
            <textarea
                cols='30'
                rows='4'
                placeholder='Descrição'
                className={`item__input item__input--${this.props.cardNumber}--${this.props.contador}`}
                onBlur={this.handleBlur}
            >
            </textarea>
        )
    }
}

const mapStateToProps = state => ({ allItems: state.cardState })
const mapDispatchToProps = dispatch => bindActionCreators({ createCard }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Textarea)