import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';
import Scoreboard from './components/Scoreboard';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    pictures
  };

  render() {
    return (
      <div>
        <Scoreboard />
        <div className="row">
          <div className="col-md-12">
            {this.state.pictures.map(tower => (
              <img id={tower.id} src={tower.image} alt={tower.name}></img>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
