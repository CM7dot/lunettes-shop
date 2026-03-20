import "./Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="GlassesTop" className="logo" />

      <ul>
        <li>Accueil</li>
        <li>Produits</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;