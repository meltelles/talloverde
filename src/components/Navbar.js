import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar__list">
      <Link to="/" className="navbar__link link">Nosotros</Link>
      <Link to="/products" className="navbar__link link">Productos</Link>
      <Link to="/" className="navbar__link link">Ayuda</Link>
      <Link to="/" className="navbar__link link"><CartWidget /></Link>
    </nav>
  );
}

export default Navbar