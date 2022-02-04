import React, { useContext, useEffect, useState } from "react";

// context
import AppContext from "../context/AppContext";

// css
import "../styles/components/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>{`Tu pedido llegara en 3 dias a tu dirección ${buyer[0].address} - ${buyer[0].city} - ${buyer[0].country}`}</span>
        <span></span>
      </div>
    </div>
  );
};

export default Success;
