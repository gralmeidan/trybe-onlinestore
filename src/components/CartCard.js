import React from "react";
import PropTypes from 'prop-types';
import { formattedPrice } from "../helpers/formatting";
import CloseIcon from '@mui/icons-material/Close';

class CartCard extends React.Component {
  render() {
    const { title, thumbnail, price, amount, addToCart, removeFromCart } =
      this.props;
    return (
      <div className="flex items-center bg-white mt-5
      rounded-md p-2 w-full">
        <img src={thumbnail} className="w-16 mr-2" />
        <div className="w-full">
          <h2 className="cart-card-title text-lg font-roboto
          font-semibold text-rose-700">{title}</h2>
          <p>{`R$ ${formattedPrice(price)}`}</p>
          <div className="flex">
            <div className="m-auto w-fit">
              <button 
                className="cart-button"
                onClick={() => addToCart({ ...this.props} )}
              >+</button>
              <span className="font-roboto">{amount}</span>
              <button
                className="cart-button"
                onClick={() => removeFromCart({ ...this.props })}
              >-</button>
            </div>
            <button>
              <CloseIcon
                className="text-gray-900 hover:text-gray-700" 
                alt="Remove item" 
                fontSize="small"
                onClick={() => removeFromCart({ ...this.props }, true)}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartCard;
