import React from 'react';
import { getCategories } from '../services/api';
import './Categories.css';
import PropTypes from 'prop-types';

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
      <aside className='max-w-fit w-36 m-1'>
        { categories.map(({ id, name }) => (
          <label key={id} className='flex items-center group cursor-pointer'>
            <input
              onChange={this.props.handleChange}
              type='radio' 
              name='category' 
              className='hidden' 
              value={id}
            />
            <p className='checkmark'>{name}</p>
          </label>
        )) }
      </aside>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
