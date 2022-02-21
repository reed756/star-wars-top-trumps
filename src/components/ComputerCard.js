import React from "react";
import styles from "../styles/ComputerCard.module.css";

function PlayersCard(props) {
  return (
    <div className={styles.computerCardDiv}>
      <h2>{props.character.name}</h2>
      <p className={styles.cardText}>
        Height:   
        {props.winner ? props.character.height : "?"}
      </p>
      <p className={styles.cardText}>
        Mass:   
        {props.winner ? props.character.mass : "?"}
      </p>
      <p className={styles.cardText}>
        Birth Year:  {props.winner ? props.character.birth_year : "?"}
      </p>
      <p className={styles.cardText}>
        No. of Films: {props.winner ? props.character.films : "?"}
      </p>
    </div>
  );
}

export default PlayersCard;
