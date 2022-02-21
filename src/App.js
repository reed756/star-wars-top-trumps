import { useEffect, useState } from "react";
import "./App.css";
import PlayersCard from "./components/PlayersCard";
import ComputerCard from "./components/ComputerCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { getSingleCharacter } from "./utils/api";
import { compare, randomNumber, getNoOfFilms } from "./utils/utils";
import Deal from "./components/Deal";

function App() {
  const [playersCard, setPlayersCard] = useState({});
  const [computersCard, setComputersCards] = useState({});
  const [playerChoice, setPlayersChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [dealt, setDealt] = useState(true);

  useEffect(() => {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    getSingleCharacter(randomNumber1).then((character) => {
      setPlayersCard({
        name: character.name,
        height: character.height,
        mass: character.mass,
        birth_year: character.birth_year,
        films: getNoOfFilms(character.films),
      });
    });
    getSingleCharacter(randomNumber2).then((character) => {
      setComputersCards({
        name: character.name,
        height: character.height,
        mass: character.mass,
        birth_year: character.birth_year,
        films: getNoOfFilms(character.films),
      });
    });
    setWinner(null);
    setPlayersChoice(null);
  }, [dealt]);

  if (playerChoice && !winner) {
    getWinner();
  }

  function getWinner() {
    const result = compare(
      playerChoice.key,
      playerChoice.value,
      computersCard[playerChoice.key]
    );
    if (result === true) {
      setWinner(playersCard.name);
    } else if (result === false) {
      setWinner(computersCard.name);
    } else {
      setWinner("nobody");
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="card-div">
        <PlayersCard
          character={playersCard}
          playerChoice={playerChoice}
          setPlayersChoice={setPlayersChoice}
          getWinner={getWinner}
        />
        <ComputerCard character={computersCard} />
      </div>
      {winner ? <Result winner={winner} /> : null}
      <Deal setDealt={setDealt} />
      <Footer />
    </div>
  );
}

export default App;
