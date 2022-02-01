import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
    clientId:
      "AYzDxfz_fDE32J4vIm-NzWUiZHnWhO88krYPEpnng3V9AsKIyUb6vxPTiYGke2Qn_XROTvQFvtkeE-ke",
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
            onSuccess={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
