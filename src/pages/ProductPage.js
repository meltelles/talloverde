import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import useProduct from "../hooks/useProduct";

export default function ProductPage() {
    const { id } = useParams();
    const {product, isLoading} = useProduct(id);
    
    if (isLoading) {
        return(<p>Cargando...</p>);
    }
    if (product) {
        const  {name, price, description, imgUrl} = product;
        return (
            <div className="container mt-5">
    
                <div className="row">
    
                    <div className="col-6">
                        <img src={imgUrl} className="img-thumbnail" alt="..."></img>
                    </div>
    
                    <div className="d-flex flex-column col-6 p-5 justify-content-between ">
                        <div>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <h4>${price}</h4>
                        </div>
                        <button className="btn btn-primary w-50 mx-auto">Añadir a carrito</button>
                    </div>
    
                </div>
    
            </div>
    
        );
    } else {
        return (<h2>Oops! algo salió mal, vuelva a intentar.</h2>)
    }

    
}



