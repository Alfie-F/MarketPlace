import { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="linkInHeader" id="first">
        Home
      </Link>
      <Link to="/account" className="linkInHeader" id="second">
        Account
      </Link>
      <Link to="/account/basket" className="linkInHeader" id="third">
        Basket
      </Link>
      <Link to="/account/sell" className="linkInHeader" id="third">
        Sell
      </Link>
      <img src={img} alt="abay logo" className="logo" />
    </header>
  );
};

export default Header;
