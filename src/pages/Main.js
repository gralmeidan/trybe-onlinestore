import React from 'react';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import MainCard from '../components/MainCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PropTypes from 'prop-types';
import FilterIcon from '@mui/icons-material/FilterAlt';

class Main extends React.Component {
  state = {
    category: '',
    query: '',
    products: [],
    displayCategories: false,
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

  toggleCategoriesDisplay = () => this.setState(({ displayCategories }) => ({
    displayCategories: !displayCategories
  }));

  render() {
    const { products, query, displayCategories } = this.state;
    const { cartItems, addToCart, removeFromCart } = this.props;
    return (
      <div>
        <Header
          cartItems={ cartItems }
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        >
          <button 
            className='m-1'
            onClick={ this.toggleCategoriesDisplay }  
          >
            <FilterIcon className='text-white'/>
          </button>
          <SearchBar 
            value={query}
            name='query'
            onChange={this.handleChange}
          />
        </Header>
        <div className='flex flex-col w-full p-3 lg:w-5/6 lg:m-auto'>
          <Categories 
            handleChange={this.handleChange}
            display={displayCategories}
          />
          <main className='grow flex flex-wrap justify-center'>
            { products.map((props) => <MainCard 
              {...props} 
              key={props.id}
              inCart={
                typeof Object.values(cartItems).find(({ id }) => id === props.id) !== 'undefined'
              }
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
