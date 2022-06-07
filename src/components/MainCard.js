import React from "react";
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import { formattedPrice } from "../helpers/formatting";
import { Link } from "react-router-dom";

class MainCard extends React.Component {
  render() {
    const { title, thumbnail, addToCart, price, inCart, shipping: { free_shipping }, id } = this.props;
    return(
      <Link to={`/product/${id}`} className={`basis-52 m-2 grow bg-white rounded-lg 
        main-card-shadow${inCart ? '-rose' : ''} p-2 pt-3 flex flex-col items-center
        justify-between `}>
        <h2 className="main-card-title font-roboto text-center
        text-lg"
        >{title}</h2>
        <img src={thumbnail} alt='' className="my-4 w-24" />
        <div className="flex w-full justify-between p-2 px-4
        items-center" onClick={e => e.preventDefault()}>
          <p>{`R$ ${formattedPrice(price)}`}</p>
          { free_shipping &&
          <div className="relative flex justify-center group -z-0"> 
            <ShippingIcon className="text-rose-600" alt="Free shipping"/>
            <p className="absolute text-center -top-9 whitespace-nowrap bg-rose-600
            font-roboto text-white font-bold px-3 py-1 rounded-lg opacity-0 
            group-hover:opacity-100 transition-opacity delay-150"
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
      </Link>
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
  id: PropTypes.string.isRequired,
};

export default MainCard;