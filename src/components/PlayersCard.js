import React from "react";
import styles from "../styles/PlayersCard.module.css";

function PlayersCard(props) {
  const handleClick = (e) => {
    props.setPlayersChoice({
      key: e.target.id,
      value: e.target.innerText,
    });
  };

  return (
    <div className={styles.playersCardDiv}>
      <h2>{props.character.name}</h2>
      <p className={styles.cardText}>
        Height:   
        <button id="height" onClick={handleClick} className={styles.button}>
          {props.character.height}
        </button>
      </p>
      <p className={styles.cardText}>
        Mass:   
        <button id="mass" onClick={handleClick} className={styles.button}>
          {props.character.mass}
        </button>
      </p>
      <p className={styles.cardText}>
        Birth Year:  
        <button id="birth_year" onClick={handleClick} className={styles.button}>
          {props.character.birth_year}
        </button>
      </p>
      <p className={styles.cardText}>
        No. of Films:{" "}
        <button id="films" onClick={handleClick} className={styles.button}>
          {props.character.films}
        </button>
      </p>
    </div>
  );
}

export default PlayersCard;
