import React from "react";

const Buttons = ({ play, choice }) => {
  return (
    <button onClick={() => play(choice)}>
      <img src={choice?.image} alt={choice?.name} />
    </button>
  );
};

export default Buttons;
