import React from "react";
import styles from "../styles/Result.module.css";

function Result(props) {
  return (
    <p
      style={{ textAlign: "center", marginBottom: "5px", transition: "150ms" }}
      className={styles.resultText}
    >
      The winner is {props.winner}!
    </p>
  );
}

export default Result;
