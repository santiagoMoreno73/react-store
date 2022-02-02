import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// button paypal
import { PayPalButton } from "react-paypal-button-v2";

// context
import AppContext from "../context/AppContext";

//misc
import { buttonStyles, handleSumTotal } from "../utils/misc";

// css
import "../styles/components/Payment.css";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: "capture",
    currency: "USD",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    } else if (data.orderID) {
      console.log("Has cancelado la transacción");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log("Start Payment")}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => handlePaymentSuccess(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
