import React, { PureComponent } from "react";

import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";
//using PureComponent to skip re-rendering each time.
//This helps with performance.

class Player extends PureComponent {
  //classes sometimes define proptypes inside, using static
  static propTypes = {
    //we can put .isrequired so that it's required
    //-- this can help to flag stuff that isn't used
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {
    //destructure the props so we don't need to use this.props.
    //This helps for readability -- we don't need to use "this.props.score" to just "score"

    const { name, id, score, index, removePlayer, changeScore } = this.props;

    console.log(name + " rendered");

    return (
      <div className="player">
        <span className="player-name">
          <Icon isHighScore={this.props.isHighScore} />
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
