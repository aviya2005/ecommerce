import React from "react";
import StripeCheckout from "react-stripe-checkout";
const CheckoutButton = ({ price }) => {
  const priceForCheckout = price * 100;
  const publicKey = "pk_test_P4zYTIrA6l9XVeu6R43dw9JK00OzHgX6VU";

  const onToken = token => {
    console.log(token);
    alert("התשלום בוצע בהצלחה");
  };
  return (
    <StripeCheckout
      token={onToken}
      amount={priceForCheckout}
      stripeKey={publicKey}
    />
  );
};

export default CheckoutButton;
