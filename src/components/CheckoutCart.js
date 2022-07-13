import React from "react";
import PropTypes from 'prop-types';
import CartCard from "./CartCard";
import { formattedPrice } from "../helpers/formatting";

function CheckoutCart({ cartItems, addToCart, removeFromCart }) {
  return (
    <section
      className="bg-white border-[1px] border-neutral-200 rounded-lg
    overflow-hidden"
    >
      <h1 className="-mb-4 mt-2 ml-2">Revise seu carrinho:</h1>
      {
        Object.values(cartItems).length === 0 && (
          <p className=" text-center my-6 text-3xl font-roboto font-semibold"
          >Seu carrinho está vazio {':('}</p>
        )
      }
      {Object.keys(cartItems).map(id => {
        return (
          <CartCard
            {...cartItems[id]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            key={id}
          />
        );
      })}
      <p className="font-roboto ml-2 m-1">
        Total: R$
        {' '}
        {formattedPrice(
          Object.values(cartItems).reduce(
            (prev, { price, amount }) => price * amount + prev,
            0
          )
        )}
      </p>
    </section>
  );
}

CheckoutCart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CheckoutCart;