import React, { Component } from "react";

class GmaeBox extends Component {
  render() {
    const { box } = this.props;

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
  }
}

export default GmaeBox;
