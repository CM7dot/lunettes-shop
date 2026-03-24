import "./Footer.css";
import logo from "../assets/logo.svg";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span className="footer-text">© 2026 Novagirly</span>
        </div>

        <div className="footer-center">
          <span>Accueil</span>
          <span>Produits</span>
          <span>Contact</span>
        </div>

        <div className="footer-right">
          <FiInstagram />
          <FiTwitter />
          <FiFacebook />
        </div>

      </div>
    </footer>
  );
}

export default Footer;