import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

const Container = ({ children }) => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      {children}
    </div>
  );
};

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div>
          <h2>El id ingresado no es valido</h2>
          <p>Por favor, ingrese un id valido</p>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <ItemDetail item={product} />
      </Container>
    );
  }
}
