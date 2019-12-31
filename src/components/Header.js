import React from "react";

import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

//destructure the props so we don't need to use props.__
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

//defaultProps will make sure that it's going to get this default
//it won't need to be input in the app.js <Header> tag
//also - it'll be type checked above as a string.

Header.defaultProps = {
  title: "Scoreboard"
};
export default Header;
