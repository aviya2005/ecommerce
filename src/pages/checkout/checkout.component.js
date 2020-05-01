import React from "react";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutButton from "../../components/checkout-button/checkout-button.component";
const Checkout = () => {
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *please use this details to test:*
        <br />
        Card number: 4242 4242 4242 4242 Exp: 01/21 CVV: 123
      </div>
      <CheckoutButton price={total} />
    </div>
  );
};

export default Checkout;
