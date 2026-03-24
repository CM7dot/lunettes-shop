import "./Navbar.css";
import logo from "../assets/logo.svg";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <img src={logo} alt="Logo" className="logo" />

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li
            className={`nav-item dropdown ${dropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            Produits

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>Lunettes de vue</li>
              <li>Lunettes de soleil</li>
              <li>Nouveautés</li>
            </ul>
          </li>

          <li className="nav-item">Contact</li>

          <li className="cart">
            <FiShoppingCart />
            <span className="cart-badge">2</span>
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;