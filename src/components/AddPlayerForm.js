import React from "react";

import { Consumer } from "./Context";

const AddPlayerForm = () => {
  let playerInput = React.createRef();

  return (
    <Consumer>
      {({ actions }) => {
        const handleSubmit = e => {
          e.preventDefault();
          //this takes the ref attribute's current state
          actions.addPlayer(playerInput.current.value);
          //this resets it after it's ben submitted
          e.currentTarget.reset();
        };
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              //using ref attribute...
              ref={playerInput}
              placeholder="Enter a player's name"
            />

            <input type="submit" value="Add Player" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;
