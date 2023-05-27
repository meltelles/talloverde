import { useReducer, useState } from "react";
import useCreateOrder from "../../hooks/useCreateOrder";
import { useCart } from "../CustomProvider";

const initialFormState = {
  name: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };

    case "RESET":
      return initialFormState;
    default:
      return state;
  }
};
export default function Checkout() {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [hasError, setHasError] = useState(true);
  const { orders, clearCart } = useCart();
  const { createOrder, isLoading } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = createOrder({
      ...formState,
      order: orders.map((o) => ({ item: o.item, amount: o.amount })),
      total: orders.reduce((acum, o) => acum + o.amount * o.item.price, 0),
    });
    clearCart();
    console.log(orderId.value);
    dispatch({ type: "RESET" });
  };

  const handleTextChange = (e) => {
    if (
      orders.reduce((acum, o) => acum + o.amount, 0) >= 1 &&
      formState.name &&
      formState.lastName &&
      formState.email &&
      formState.email === formState.confirmEmail &&
      formState.phone
    ) {
      setHasError(false);
    }
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="w-75 px-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                value={formState.name}
                onChange={(e) => handleTextChange(e)}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Ingrese su mail"
                value={formState.email}
                onChange={(e) => handleTextChange(e)}
                required
              />
            </div>
            <br />
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Ingrese su apellido"
                value={formState.lastName}
                onChange={(e) => handleTextChange(e)}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email2">Confirme su Email</label>
              <input
                type="email"
                className="form-control"
                id="email2"
                name="confirmEmail"
                aria-describedby="emailHelp"
                placeholder="Ingrese su mail"
                value={formState.confirmEmail}
                onChange={(e) => handleTextChange(e)}
                required
              />
            </div>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              id="lastName"
              value={formState.phone}
              onChange={(e) => handleTextChange(e)}
              required
            />
          </div>
          <br />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={hasError || isLoading}
        >
          Comprar
        </button>
      </form>
    </div>
  );
}
