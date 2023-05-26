import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar__list">
      <Link to="/categories/frutas" className="navbar__link">
        Frutas
      </Link>
      <Link to="/categories/verduras" className="navbar__link">
        Verduras
      </Link>
      <Link to="/categories/almacen" className="navbar__link">
        Almacén
      </Link>
    </nav>
  );
};

export default Navbar;
