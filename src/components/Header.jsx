import React from "react";
import { Link } from "react-router-dom";

// css
import "../styles/components/Header.css";

//react-icons
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
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
    </div>
  );
};

export default Header;
