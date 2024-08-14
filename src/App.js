import "./App.css";
import { useState } from "react";
import GmaeBox from "./componet/GmaeBox";
import Buttons from "./componet/Buttons";

function App() {
  const [box, setBox] = useState({
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
  });

  const [choice, userChoice] = useState({
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
  });

  const play = (selectedChoice) => {
    setBox((prevBox) => ({
      ...prevBox,
      user: {
        ...prevBox.user,
        image: selectedChoice.image,
        result: algorithms(selectedChoice.name, choices[getRandomNum].name),
      },
    }));

    const getRandomNum = randomNum();

    const choices = Object.values(choice);
    setBox((prevBox) => ({
      ...prevBox,
      computer: {
        ...prevBox.computer,
        image: choices[getRandomNum].image,
        result: algorithms(choices[getRandomNum].name, selectedChoice.name),
      },
    }));
  };

  const randomNum = () => Math.floor(Math.random() * 3);

  const algorithms = (userChoice, computerChoice) => {
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

  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <GmaeBox box={box.user} setBox={setBox} />
        <GmaeBox box={box.computer} setBox={setBox} />
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Buttons play={play} choice={choice.rock} />
        <Buttons play={play} choice={choice.scissors} />
        <Buttons play={play} choice={choice.paper} />
      </section>
    </div>
  );
}

export default App;
