import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const useCreateOrder = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async (order) => {
    // Simulo un fetch
    try {
      setIsLoading(true);
      const ordersCollection = collection(db, "orders");
      const newOrder = await addDoc(ordersCollection, {
        createdAt: new Date().toISOString(),
        status: "generada",
        ...order,
      });
      return newOrder.id;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { createOrder, isLoading };
};

export default useCreateOrder;
