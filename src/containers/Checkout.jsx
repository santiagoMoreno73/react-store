import React from "react";
import { Link } from "react-router-dom";

// css
import "../styles/components/Checkout.css";

//react-icons
import { AiOutlineDelete } from "react-icons/ai";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$18</span>
          </div>
          <button type="button">
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
