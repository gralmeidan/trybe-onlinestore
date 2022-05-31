import React from 'react';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import MainCard from '../components/MainCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PropTypes from 'prop-types';

class Main extends React.Component {
  state = {
    category: '',
    query: '',
    products: [],
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value
    }), () => this.fetchProducts());
  };

  fetchProducts = async () => {
    const { category, query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    this.setState(() => ({
      products: results || []
    }));
  };

  render() {
    const { products, query } = this.state;
    const { cartItems, addToCart, removeFromCart } = this.props;
    return (
      <div>
        <Header
          cartItems={ cartItems }
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        >
          <SearchBar 
            value={query}
            name='query'
            onChange={this.handleChange}
          />
        </Header>
        <div className='flex w-full p-3'>
          <Categories 
            handleChange={this.handleChange}
          />
          <main className='grow flex flex-wrap justify-center'>
            { products.map((props) => <MainCard 
              {...props} 
              key={props.id}
              addToCart={addToCart}  
            />)}
          </main>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  cartItems: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Main;
