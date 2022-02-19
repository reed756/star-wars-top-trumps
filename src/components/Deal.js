import React from "react";

function Deal(props) {
  function handleClick() {
    props.setDealt((prev) => !prev);
  }
  return <button onClick={handleClick}>Deal</button>;
}

export default Deal;
