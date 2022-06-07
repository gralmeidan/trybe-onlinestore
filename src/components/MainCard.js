import React from "react";
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import { formattedPrice } from "../helpers/formatting";

class MainCard extends React.Component {
  render() {
    const { title, thumbnail, addToCart, price, inCart, shipping: { free_shipping } } = this.props;
    return(
      <div className={`basis-52 m-2 grow bg-white rounded-lg 
        main-card-shadow${inCart ? '-rose' : ''} p-2 pt-3 flex flex-col items-center
        justify-between `}>
        <h2 className="main-card-title font-roboto text-center
        text-lg"
        >{title}</h2>
        <img src={thumbnail} alt='' className="my-4 w-24" />
        <div className="flex w-full justify-between p-2 px-4
        items-center">
          <p>{`R$ ${formattedPrice(price)}`}</p>
          { free_shipping &&
          <div className="relative flex justify-center group -z-0"> 
            <ShippingIcon className="text-rose-600" alt="Free shipping"/>
            <p className="absolute text-center -top-9 whitespace-nowrap bg-rose-600
            font-roboto text-white font-bold px-3 py-1 rounded-lg opacity-0 
            group-hover:opacity-100 transition-opacity"
            >Frete grátis</p>
          </div> }
          <button
            onClick={() => {
              addToCart({ ...this.props });
            }}
          >
            <AddShoppingCartIcon className="hover:text-rose-600
            active:text-rose-900" alt="add to cart"/>
          </button>
        </div>
      </div>
    );
  }
}

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  inCart: PropTypes.bool.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MainCard;