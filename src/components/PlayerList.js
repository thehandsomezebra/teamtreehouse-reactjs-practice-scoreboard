import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = () => {
  return (
    <Consumer>
      {({ players, actions }) => (
        <React.Fragment>
          {players.map((player, index) => (
            <Player
              isHighScore={actions.getHighScore() === player.score}
              key={player.id.toString()}
              index={index}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default PlayerList;
