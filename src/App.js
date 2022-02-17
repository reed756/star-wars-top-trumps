import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getSingleCharacter } from "./utils/api";
import { randomNumber } from "./utils/utils";

function App() {
  const [playersCard, setPlayersCard] = useState({});
  const [computerCard, setComputerCards] = useState({});

  useEffect(() => {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    getSingleCharacter(randomNumber1).then((character) => {
      setPlayersCard(character);
    });
    getSingleCharacter(randomNumber2).then((character) => {
      setComputerCards(character);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Card character={playersCard} />
      <Card character={computerCard} />
      <Footer />
    </div>
  );
}

export default App;
