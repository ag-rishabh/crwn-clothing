import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QBm69E0yTWnbIUIB7uoTA1CM00Z4d2NRqg";

  const onToken = (token) => {
    console.log(token);
    alert("Payyment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
