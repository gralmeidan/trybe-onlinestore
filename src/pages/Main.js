import React from 'react';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends React.Component {
  state = {
    category: '',
    query: '',
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
    const { results: products } = await getProductsFromCategoryAndQuery(category, query);
    this.setState(() => ({
      products,
    }));
  };

  render() {
    return (
      <div>
        <header className='bg-rose-600'>
          <h1 className='text-white text-2xl p-3 font-semibold'>TrybeStore</h1>
        </header>
        <div className='flex w-full m-2'>
          <Categories 
            handleChange={this.handleChange}
          />
          <main className='grow'>
            opa
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
