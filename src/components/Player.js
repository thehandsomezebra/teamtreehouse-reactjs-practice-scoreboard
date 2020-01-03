import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() {
    const { index } = this.props;
    //const highScore = this.getHighScore();
    return (
      <div className="player">
        <Consumer>
          {({ actions, players }) => (
            <span className="player-name">
              <Icon isHighScore={this.props.isHighScore} />
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index.id])}
              >
                ✖
              </button>
              {players[index].name}
            </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    );
  }
}

export default Player;
