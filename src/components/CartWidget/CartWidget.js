import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../CustomProvider";
import "./CartWidget.css";

export default function CartWidget() {
  const { orders } = useCart();
  return (
    <div className="cart__container">
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        <FiShoppingCart />
        <span> {orders.reduce((acum, o) => acum + o.amount, 0)}</span>
      </Link>
    </div>
  );
}
