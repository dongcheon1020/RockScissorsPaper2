import React, { Component } from "react";
import "./App.css";
import GmaeBox from "./componet/GmaeBox";
import Buttons from "./componet/Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: {
        user: {
          name: "User",
          image:
            "https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png",
          result: null,
        },
        computer: {
          name: "Computer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7Pi4eKYFaNI42FsntgMZdc378HZHU3D_Dw&s",
          result: null,
        },
      },
      choice: {
        rock: {
          name: "rock",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/200px-Rock-paper-scissors_%28rock%29.png",
        },
        scissors: {
          name: "scissors",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/200px-Rock-paper-scissors_%28scissors%29.png",
        },
        paper: {
          name: "paper",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/200px-Rock-paper-scissors_%28paper%29.png",
        },
      },
    };
  }

  play = (selectedChoice) => {
    const { choice } = this.state;

    const getRandomNum = this.randomNum();
    const choices = Object.values(choice);

    this.setState((prevState) => ({
      box: {
        ...prevState.box,
        user: {
          ...prevState.box.user,
          image: selectedChoice.image,
          result: this.algorithms(
            selectedChoice.name,
            choices[getRandomNum].name
          ),
        },
        computer: {
          ...prevState.box.computer,
          image: choices[getRandomNum].image,
          result: this.algorithms(
            choices[getRandomNum].name,
            selectedChoice.name
          ),
        },
      },
    }));
  };

  randomNum = () => Math.floor(Math.random() * 3);

  algorithms = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "tie";
    }

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  render() {
    const { box, choice } = this.state;

    return (
      <div>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <GmaeBox box={box.user} />
          <GmaeBox box={box.computer} />
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Buttons play={this.play} choice={choice.rock} />
          <Buttons play={this.play} choice={choice.scissors} />
          <Buttons play={this.play} choice={choice.paper} />
        </section>
      </div>
    );
  }
}

export default App;
