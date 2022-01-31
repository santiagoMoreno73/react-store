import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import AppContext from "../context/AppContext";

// misc
import { handleSumTotal } from "../utils/misc";

// css
import "../styles/components/Checkout.css";

//react-icons
import { AiOutlineDelete } from "react-icons/ai";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.cartId}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item.cartId)}>
              <AiOutlineDelete />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
