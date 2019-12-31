import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Jeff",
        score: 0,
        id: 1
      },
      {
        name: "Ms. Keisha",
        score: 0,
        id: 2
      },
      {
        name: "Shalissa",
        score: 0,
        id: 3
      },
      {
        name: "Tre",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
    // console.log(index, delta);
  };

  prevPlayerId = 4;

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };

  getHighScore = () => {
    //grab all the players scores
    const scores = this.state.players.map(p => p.score);
    //get the highest score
    const highScore = Math.max(...scores);
    //now check if there's a high score at all and return that
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    //call the function which gives it a boolean value..
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            score={player.score}
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            //passing the t/f highscore to the players...
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
