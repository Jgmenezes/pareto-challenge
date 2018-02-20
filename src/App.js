import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="cards">
        <Card title='TODO' cardNumber={1}/>
        <Card title='DOING' cardNumber={2}/>
        <Card title='DONE' cardNumber={3}/>
      </div>
    );
  }
}

export default App;
