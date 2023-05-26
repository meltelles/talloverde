import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, imgUrl, description, price, id } = item;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <div className="d-flex align-items-start flex-column mb-3">
          <Link to={`/items/${id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}
