import React, { Component } from 'react';
import CardContainer from './containers/CardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="cards">
        <CardContainer />
      </div>
    );
  }
}

export default App;
