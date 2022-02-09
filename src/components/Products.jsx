import React, { useContext } from "react";

// components
import Product from "./Product";
import Loader from "./Shared/Loader";

//context
import AppContext from "../context/AppContext";

//misc
import { handleRandomKey } from "../utils/misc";

// css
import "../styles/components/Products.css";

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  if (products.length == 0) {
    return <Loader />;
  }

  const handleAddToCart = (product) => () => {
    const idRandom = Math.floor(Math.random() * 1000);
    const newProduct = {
      ...product,
      cartId: idRandom,
    };
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={handleRandomKey(product.id)}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
