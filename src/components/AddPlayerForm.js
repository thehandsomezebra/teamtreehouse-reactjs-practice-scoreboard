import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a player name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
export default AddPlayerForm;
