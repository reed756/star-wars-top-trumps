import { useEffect, useState } from "react";
import "./App.css";
import PlayersCard from "./components/PlayersCard";
import ComputerCard from "./components/ComputerCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { getSingleCharacter } from "./utils/api";
import { randomNumber } from "./utils/utils";
import Deal from "./components/Deal";

function App() {
  const [playersCard, setPlayersCard] = useState({});
  const [computersCard, setComputersCards] = useState({});
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
        films: character.films,
      });
    });
    getSingleCharacter(randomNumber2).then((character) => {
      setComputersCards({
        name: character.name,
        height: character.height,
        mass: character.mass,
        birth_year: character.birth_year,
        films: character.films,
      });
    });
  }, [dealt]);

  return (
    <div className="App">
      <Header />
      <PlayersCard character={playersCard} />
      <ComputerCard character={computersCard} />
      <Result winner={winner} />
      <Deal setDealt={setDealt} />
      <Footer />
    </div>
  );
}

export default App;
