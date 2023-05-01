import ItemListContainer from "../components/ItemListContainer";
import useCounter from "../hooks/useCounter";

export default function HomePage() {
    const {counter, increment, decrement} = useCounter();
    return (<>
        <ItemListContainer greeting={"Bienvenidos"} />
        <button onClick={decrement}>-</button>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
    </>

    );
}
