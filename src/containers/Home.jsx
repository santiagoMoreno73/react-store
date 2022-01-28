import React from "react";

// components
import Products from "../components/Products";

// data
import initialState from "../initialState";

const Home = () => {
  return (
    <div>
      <Products products={initialState.products} />
    </div>
  );
};

export default Home;
