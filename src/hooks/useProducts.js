import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const useProducts = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsCollection = collection(db, "items");
        let filter = productsCollection;
        if (category) {
          filter = query(productsCollection, where("category", "==", category));
        }
        const resp = await getDocs(filter);
        console.log(resp);
        const parsedResp = resp.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setProducts(parsedResp);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    getProducts();
  }, [category]);

  return { products, isLoading };
};

export default useProducts;
