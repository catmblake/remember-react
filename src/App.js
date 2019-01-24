import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';
import Scoreboard from './components/Scoreboard';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    waterTowers: pictures
  };

  render() {
    return (
      <div>
        <Scoreboard />
        <div className="row">
        <div className="col-md-12">
          <p>{pictures[0].name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
