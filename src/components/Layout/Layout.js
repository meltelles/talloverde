import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header className="header__container">
        <Link className="header__link" to="/">
          <h1 className="header__title">Talloverde</h1>
        </Link>
        <Navbar />
        <CartWidget />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
