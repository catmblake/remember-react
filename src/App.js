import React, { Component } from 'react';
import './App.css';
import towers from './towers.json';
import Scoreboard from './components/Scoreboard';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import TowerCard from './components/TowerCard';


class App extends Component {
  // Setting this.state.towers to the towers json array
  state = {
    towers,
    score: 0,
    topScore: 0
  };

  handleClickEvent = id => {
    this.state.towers.find((card, i) => {
      if (card.id === id) {
        if (towers[i].clicked === false) {
          towers[i].clicked = true;
          this.setState({ score: this.state.score + 1 });
          this.state.towers.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.newRound();
        }
      }
    });
  }

  newRound = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    this.state.towers.forEach(tower => {
      tower.clicked = false;
    });
    alert(`Game over! Please try again. \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  render() {
    return (
      <div>
        <Scoreboard score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron message={this.state.message} />
        <Container>
          {this.state.towers.map(tower => (
            <TowerCard
              handleClickEvent={this.handleClickEvent}
              id={tower.id}
              key={tower.id}
              image={tower.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}
export default App;
