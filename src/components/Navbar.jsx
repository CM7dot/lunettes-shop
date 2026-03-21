import "./Navbar.css";
import logo from "../assets/logo.svg";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const cartCount = 1; // nombre d’articles

  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="GlassesTop" className="logo" />

        <ul className={open ? "nav-links active" : "nav-links"}>
          <li className="nav-item" onClick={() => setOpen(false)}>Accueil</li>
          <li className="nav-item" onClick={() => setOpen(false)}>Produits</li>
          <li className="nav-item" onClick={() => setOpen(false)}>Contact</li>

          <li className="cart">
            <div className="cart-icon">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;