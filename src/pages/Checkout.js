import React from "react";
import Header from "../components/Header";
import PropTypes from 'prop-types';
import CheckoutCart from "../components/CheckoutCart";
import BuyerForm from "../components/BuyerForm";

function Checkout({ cartItems, addToCart, removeFromCart }) {
  return(
    <div>
      <Header
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        displayCart={false}
      />
      <main className="m-2 mt-4 lg:w-5/6 lg:m-auto lg:mt-4">
        <CheckoutCart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <BuyerForm />
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