import React from "react";

const GmaeBox = ({ box, setBox }) => {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor:
          box.result === "win"
            ? "green"
            : box.result === "lose"
            ? "red"
            : "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>{box?.name}</h4>
      <img style={{ width: "100%" }} src={box?.image} alt={box?.image} />
      <span>{box?.result}</span>
    </div>
  );
};

export default GmaeBox;
