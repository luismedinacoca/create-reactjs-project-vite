// import { useState } from "react";

interface Props {
  counter: number
  handleClickIncrement: () => void
}

const CounterButton = ({ counter, handleClickIncrement }: Props) => {
  //const [counter, setCounter] = useState(0);

  // const handleClickIncrement = () => {
  //   const newValue = counter + 1;
  //   setCounter(newValue);
  // }

  return (
    <button onClick={handleClickIncrement}>{counter}</button>
  )
}

export default CounterButton;
