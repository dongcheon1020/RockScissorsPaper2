import React from "react";

const Buttons = ({ play, choice }) => {
  return (
    <button onClick={() => play(choice)} style={{}}>
      <img src={choice?.image} alt={choice?.name} style={{ width: "100%" }} />
    </button>
  );
};

export default Buttons;
