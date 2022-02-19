import React from "react";
import { getNoOfFilms, compare } from "../utils/utils";

function PlayersCard(props) {
  const noOfFilms = getNoOfFilms(props.character.films);

  const handleClick = (e) => {
    props.setPlayersChoice({
      key: e.target.id,
      value: e.target.innerText,
    });
    console.log(
      compare(
        props.playerChoice.key,
        props.playerChoice.value,
        props.computer[`${props.playerChoice.key}`]
      )
    );
    props.setTakenTurn(true);
  };

  return (
    <div style={{ color: "white" }}>
      <h2 style={{ color: "white" }}>{props.character.name}</h2>
      <p style={{ color: "white" }}>
        Height:   
        <button id="height" onClick={handleClick}>
          {props.character.height}
        </button>
      </p>
      <p style={{ color: "white" }}>
        Mass:   
        <button id="mass" onClick={handleClick}>
          {props.character.mass}
        </button>
      </p>
      <p style={{ color: "white" }}>
        Birth Year:  
        <button id="birth_year" onClick={handleClick}>
          {props.character.birth_year}
        </button>
      </p>
      <p style={{ color: "white" }}>
        No. of Films:{" "}
        <button id="noOfFilms" onClick={handleClick}>
          {noOfFilms}
        </button>
      </p>
    </div>
  );
}

export default PlayersCard;
