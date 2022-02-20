import React from "react";

function Result(props) {
  return (
    <p
      style={{ textAlign: "center", marginBottom: "5px", transition: "150ms" }}
    >
      The winner is {props.winner}!
    </p>
  );
}

export default Result;
