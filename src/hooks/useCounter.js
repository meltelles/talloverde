import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    resetCounter: resetCounter,
  };
};

export default useCounter;
