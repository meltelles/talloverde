import useCounter from "../../hooks/useCounter";
export default function ItemDetail({ item }) {
  const { name, price, description, imgUrl } = item;
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imgUrl} className="img-thumbnail" alt="..."></img>
        </div>
        <div className="d-flex flex-column col-6 p-5 justify-content-between ">
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>${price}</h4>
          </div>
          <div
            className="d-flex align-items-center mb-4"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={decrement}
              type="button"
              className="btn btn-primary"
            >
              -
            </button>
            <div className="mx-2">{counter}</div>
            <button
              onClick={increment}
              type="button"
              className="btn btn-primary"
            >
              +
            </button>
          </div>
          <button className="btn btn-primary w-50 mx-auto">
            Añadir a carrito
          </button>
        </div>
      </div>
    </div>
  );
}
