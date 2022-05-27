import React from "react";
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from "../services/cartStorage";

class MainCard extends React.Component {
  formattedPrice = () => {
    const { price } = this.props;
    return price
      .toFixed(2)
      .toString()
      .replace('.',',');
  };

  render() {
    const { title, thumbnail } = this.props;
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
          <p>{`R$ ${this.formattedPrice()}`}</p>
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
};

export default MainCard;