import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import AppContext from "../context/AppContext";

// css
import "../styles/components/Header.css";

//react-icons
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <BiShoppingBag />
        </Link>
      </div>
      {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
    </div>
  );
};

export default Header;
