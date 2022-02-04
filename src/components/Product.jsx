import React, { useContext } from "react";

// context
import AppContext from "../context/AppContext";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div>
      <div className="Products-item">
        <img src={product.image} alt={product.title} />
        <div className="Products-item-info ">
          <h2>
            {product.title}
            <span>${product.price}</span>
          </h2>
          <p>{product.description}</p>
          <button type="button" onClick={handleAddToCart(product)}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
