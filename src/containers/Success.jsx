import React, { useContext, useEffect, useState } from "react";

// context
import AppContext from "../context/AppContext";

// components
import Map from "../components/Map";
import Loader from "../components/Shared/Loader";

// hooks
import useSearchAddress from "../hooks/useSearchAddress";

// css
import "../styles/components/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const [loadingFetch, map] = useSearchAddress(buyer);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección</span>
        <div className="Success-map">
          {!loadingFetch ? <Map data={map} load={loadingFetch} /> : <Loader />}
        </div>
      </div>
    </div>
  );
};

export default Success;
