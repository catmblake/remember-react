import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    waterTowers: pictures
  };
  
  render() {
    return (
      <div>
        <h1>World of Water Towers</h1>
        <p>{pictures[0].name}</p>
      </div>
    );
  }
}

export default App;
