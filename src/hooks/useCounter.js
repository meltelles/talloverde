import { useState } from "react"


const useCounter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter: counter,
        increment: handleIncrement,
        decrement: handleDecrement
    }
}


export default useCounter