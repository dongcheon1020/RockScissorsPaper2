import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { play, choice } = this.props;

    return (
      <button onClick={() => play(choice)} style={{ width: "100px" }}>
        <img src={choice?.image} alt={choice?.name} style={{ width: "100%" }} />
      </button>
    );
  }
}

export default Buttons;
