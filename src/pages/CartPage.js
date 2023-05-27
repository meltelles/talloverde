import Checkout from "../components/Checkout/Checkout";
import { useCart } from "../components/CustomProvider";

const AmountLine = ({ amount, onDecrement, onIncrement }) => {
  return (
    <div
      className="d-flex align-items-center"
      role="group"
      aria-label="Basic example"
    >
      <button
        onClick={onDecrement}
        type="button"
        className="btn btn-primary"
        disabled={amount <= 0}
      >
        -
      </button>
      <div className="mx-2">{amount}</div>
      <button
        onClick={onIncrement}
        type="button"
        className="btn btn-primary"
        disabled={amount >= 20}
      >
        +
      </button>
    </div>
  );
};

const SimpleItem = ({ item }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", flexDirection: "row", border: "none" }}
    >
      <img
        className="w-50 card-img-top"
        src={item.imgUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
      </div>
    </div>
  );
};
const Row = ({ order, index }) => {
  const { item, amount } = order;
  const { removeFromCart, modifyAmount } = useCart();
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <SimpleItem item={item} />
      </td>
      <td className="align-middle">
        <AmountLine
          amount={amount}
          onDecrement={() => modifyAmount(order.id, -1)}
          onIncrement={() => modifyAmount(order.id, 1)}
        />
      </td>
      <td className="align-middle">{item.price * amount}</td>
      <td className="align-middle">
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart(order.id)}
        >
          eliminar
        </button>
      </td>
    </tr>
  );
};
export default function CartPage() {
  const { orders } = useCart();

  return (
    <>
      <h1>Carrito</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">cantidad</th>
            <th scope="col">total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, idx) => (
            <Row key={o.id} order={o} index={idx + 1} />
          ))}
        </tbody>
      </table>
      <h3>
        Total: {orders.reduce((acum, o) => acum + o.amount * o.item.price, 0)}
      </h3>
      <div className="mt-5">
        <Checkout />
      </div>
    </>
  );
}
