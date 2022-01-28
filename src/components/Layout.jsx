import React from "react";

// components
import Header from "./Header";
import Footer from "./Footer";

// css
import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
