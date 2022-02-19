import React from "react";
import { getNoOfFilms } from "../utils/utils";

function PlayersCard(props) {
  return (
    <div style={{ color: "white" }}>
      <h2 style={{ color: "white" }}>{props.character.name}</h2>
      <p style={{ color: "white" }}>
        Height:   
        {props.character.height}
      </p>
      <p style={{ color: "white" }}>
        Mass:   
        {props.character.mass}
      </p>
      <p style={{ color: "white" }}>
        Birth Year:  {props.character.birth_year}
      </p>
      <p style={{ color: "white" }}>No. of Films: {props.character.films}</p>
    </div>
  );
}

export default PlayersCard;
