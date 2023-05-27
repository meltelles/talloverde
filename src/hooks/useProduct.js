import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
const useProduct = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      // Simulo un fetch
      try {
        const productDoc = doc(db, "items", id);
        const resp = await getDoc(productDoc);
        const product = resp.exists()
          ? { id: resp.id, ...resp.data() }
          : undefined;
        setProduct(product);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProduct();
  }, [id]);

  return { product, isLoading };
};

export default useProduct;
