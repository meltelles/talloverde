import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const oldOrders = localStorage.getItem("cart");
      if (oldOrders) {
        setOrders(JSON.parse(oldOrders));
      }
      setLoaded(true);
    } else {
      localStorage.setItem("cart", JSON.stringify(orders));
    }
  }, [orders]);

  const addToCart = (item, amount) => {
    const newOrder = { id: item.id, item: item, amount: amount };
    const oldOrder = orders.find((o) => o.id === item.id);
    if (oldOrder) {
      newOrder.amount += oldOrder.amount;
    }
    setOrders((prev) => [newOrder, ...prev.filter((o) => o.id !== item.id)]);
  };

  const modifyAmount = (id, amount) => {
    const order = orders.find((o) => o.id === id);
    if (!order) {
      return;
    }
    let newAmount = order.amount + amount;
    if (newAmount < 1) newAmount = 1;
    if (newAmount > 20) newAmount = 20;
    setOrders((prev) => [
      { ...order, amount: newAmount },
      ...prev.filter((o) => o.id !== id),
    ]);
  };

  const removeFromCart = (id) => {
    const order = orders.find((o) => o.id === id);
    if (!order) {
      return;
    }
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const clearCart = () => {
    setOrders([]);
  };

  const value = {
    orders: orders,
    addToCart: addToCart,
    modifyAmount: modifyAmount,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useCart = () => useContext(CartContext);
export default CustomProvider;
