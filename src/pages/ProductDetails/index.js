import React from "react";
import Header from "../../components/Header";
import PropTypes from 'prop-types';
import { fetchProduct } from "../../services/api";
import PictureDisplay from "./PictureDisplay";
import ProductInfo from "./ProductInfo";
import ProductPricing from "./ProductPricing";
import ProductAttributes from "./ProductAttributes";
import ProductReviews from "./ProductReviews";
import Loading from "../../components/Loading";

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
    const { title, pictures, reviews, id } = this.state.produto;
    return (
      <div>
        <Header
          cartItems={ cartItems }
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        { !title ? <Loading />:
          <main className="mt-2 lg:w-5/6 lg:m-auto xl:w-3/4">
            <div className="md:flex">
              <PictureDisplay pictures={pictures} />
              <ProductInfo {...this.state.produto}/>
              <hr className="md:hidden border-[1px]"/>
              <ProductPricing {...this.state.produto} addToCart={addToCart}/>
            </div>
            <div>
              <ProductAttributes {...this.state.produto} />
              <ProductReviews 
                { ...reviews } 
                id={id}  
              />
            </div>
          </main>
        }
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