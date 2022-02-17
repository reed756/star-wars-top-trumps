import React from "react";
import { getNoOfFilms } from "../utils/utils";

function Card(props) {
  const noOfFilms = getNoOfFilms(props.character.films);

  return (
    <div style={{ color: "white" }}>
      <h2 style={{ color: "white" }}>{props.character.name}</h2>
      <p style={{ color: "white" }}>Height: {props.character.height}</p>
      <p style={{ color: "white" }}>Mass: {props.character.mass}</p>
      <p style={{ color: "white" }}>Birth Year: {props.character.birth_year}</p>
      <p style={{ color: "white" }}>No. of Films: {noOfFilms}</p>
    </div>
  );
}

export default Card;
