import React from "react";
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { formattedPrice } from "../helpers/formatting";

class MainCard extends React.Component {
  render() {
    const { title, thumbnail, addToCart, price } = this.props;
    return(
      <div className="basis-52 m-2 grow bg-white rounded-lg 
        main-card-shadow p-2 pt-3 flex flex-col items-center
        justify-between">
        <h2 className="main-card-title font-roboto text-center
        text-lg"
        >{title}</h2>
        <img src={thumbnail} alt='' className="my-4 w-24" />
        <div className="flex w-full justify-between p-2 px-4
        items-center">
          <p>{`R$ ${formattedPrice(price)}`}</p>
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
};

export default MainCard;