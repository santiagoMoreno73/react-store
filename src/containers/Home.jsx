import React from "react";

//seo
import { Helmet } from "react-helmet";

// components
import Products from "../components/Products";

// data
import initialState from "../initialState";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>React Store Conf</title>
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
