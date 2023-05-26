import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import useProducts from "../../hooks/useProducts";

export default function ItemListContainer() {
  const { category } = useParams();
  const { products, isLoading } = useProducts(category);

  return (
    <>
      <h1>Productos</h1>
      {category && <h3>Filtrando por: {category}</h3>}
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </>
  );
}
