import React from 'react';
import { getCategories } from '../services/api';
import './Categories.css';

class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState(() => ({
      categories,
    }));
  };

  render() {
    const { categories } = this.state;
    return (
      <aside className='w-fit m-1'>
        { categories.map(({ id, name }) => (
          <label key={id} className='flex items-center group'>
            <input type='radio' name='category' className='hidden'/>
            <p className='checkmark'>{name}</p>
          </label>
        )) }
      </aside>
    );
  }
}

export default Categories;
