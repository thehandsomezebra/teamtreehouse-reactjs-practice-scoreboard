import React from "react";

const AddPlayerForm = ({ addPlayer }) => {
  let playerInput = React.createRef();
  let handleSubmit = e => {
    e.preventDefault();
    //this takes the ref attribute's current state
    addPlayer(playerInput.current.value);
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
};

export default AddPlayerForm;
