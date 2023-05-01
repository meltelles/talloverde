import useCounter from "../hooks/useCounter";

export default function Card({ product }) {
    const { name, imgUrl, description, price, } = product;
    const { counter, increment, decrement, } = useCounter();

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex align-items-start flex-column mb-3">
                    <div className="d-flex align-items-center mb-4" role="group" aria-label="Basic example">
                        <button onClick={decrement} type="button" className="btn btn-primary">-</button>
                        <div className="mx-2">{counter}</div>
                        <button onClick={increment} type="button" className="btn btn-primary">+</button>
                    </div>
                    <button className="btn btn-primary">Añadir a carrito</button>
                </div>

            </div>
        </div>
    );
}