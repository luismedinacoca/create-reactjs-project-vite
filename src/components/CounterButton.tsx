import { useState } from "react";

const CounterButton = () => {
  //let counter = 0;
  const counterState = useState(0);

  const counter = counterState[0];
  const setCounter = counterState[1];

  const handleClickIncrement = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    //counter = counter + 1;
    //console.log("counter: ", newValue);
  }
  return (
    <button onClick={handleClickIncrement}>{counter}</button>
  )
}

export default CounterButton;
