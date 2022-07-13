import React from "react";
import Header from "../components/Header";
import PropTypes from 'prop-types';
import CheckoutCart from "../components/CheckoutCart";
import TextInput from "../components/TextInput";

function Checkout({ cartItems, addToCart, removeFromCart }) {
  return(
    <div>
      <Header
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        displayCart={false}
      />
      <main className="m-2">
        <CheckoutCart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <TextInput />
      </main>
    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Checkout;