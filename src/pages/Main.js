import React from 'react';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import MainCard from '../components/MainCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

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
    return (
      <div>
        <Header>
          <SearchBar 
            value={query}
            name='query'
            onChange={this.handleChange}
          />
        </Header>
        <div className='flex w-full m-3'>
          <Categories 
            handleChange={this.handleChange}
          />
          <main className='grow flex flex-wrap justify-center'>
            { products.map((props) => <MainCard {...props} key={props.id}/>)}
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
