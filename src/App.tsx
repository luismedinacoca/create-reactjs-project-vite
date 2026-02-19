import { useState } from "react";

import "./App.css";
import CounterButton from "./components/CounterButton";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    const newValue = counter + 1;
    setCounter(newValue);
  };

  return (
    <>
      <h1>useState</h1>
      <CounterButton counter={counter} handleClickIncrement={handleClickIncrement} /> {" "}
      <CounterButton  
        counter={counter}
        handleClickIncrement={handleClickIncrement}
      />
    </>
  );
}

export default App;
