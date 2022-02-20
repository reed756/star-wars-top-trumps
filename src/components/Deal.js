import React from "react";
import styles from "../styles/Deal.module.css";

function Deal(props) {
  function handleClick() {
    props.setDealt((prev) => !prev);
  }
  return (
    <div className={styles.dealDiv}>
      <button onClick={handleClick} className={styles.button}>
        DEAL
      </button>{" "}
    </div>
  );
}

export default Deal;
