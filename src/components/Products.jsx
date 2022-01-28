import React from "react";

// components
import Product from "./Product";

// css
import "../styles/components/Products.css";

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
