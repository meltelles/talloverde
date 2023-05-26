import { useEffect, useState } from "react";
const PRODUCTS = [
  {
    id: 1,
    name: "Arándanos",
    category: "frutas",
    description: "100gr",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1624244245044-3276904951c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "Miel",
    category: "almacen",
    description: "250ml",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1587049352895-5caf69ef3b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "huevos",
    category: "almacen",
    description: "6 unidades",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1586802990181-a5771596eaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const useProducts = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      // Simulo un fetch
      try {
        const resp = await new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                PRODUCTS.filter((p) => !category || p.category === category)
              ),
            1000
          );
        });
        setProducts(resp);
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
