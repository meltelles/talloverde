import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar__list">
      <a href="#" className="navbar__link link">Nosotros</a>
      <a href="#" className="navbar__link link">Productos</a>
      <a href="#" className="navbar__link link">Ayuda</a>
      <a href="#" className="navbar__link link"><CartWidget /></a>
    </nav>
  );
}

export default Navbar