import React from "react";
import Header from "../components/Header";
import PropTypes from 'prop-types';
import { fetchProduct } from "../services/api";

class ProductDetails extends React.Component {
  state = {
    produto: {},
  };

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const produto = await fetchProduct(id);
    this.setState(() => ({
      produto,
    }));
  };

  render() {
    const { cartItems, addToCart, removeFromCart } = this.props;
    return (
      <div>
        <Header
          cartItems={ cartItems }
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    );
  } 
}

ProductDetails.propTypes = {
  cartItems: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;