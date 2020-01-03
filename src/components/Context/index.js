import React, { Component } from "react";

const ScoreboardContext = React.createContext();

export class Provider extends Component {
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

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
    // console.log(index, delta);
  };

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
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
            getHighScore: this.getHighScore
          }
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}

//export keyword to use in other components
//export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
