import React, { Component } from 'react';
import CardContainer from './containers/CardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="cards">
        <CardContainer title='TODO' cardNumber={1} />
        <CardContainer title='DOING' cardNumber={2} />
        <CardContainer title='DONE' cardNumber={3} />
      </div>
    );
  }
}

export default App;
