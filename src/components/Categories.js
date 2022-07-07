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
    const { display } = this.props;
    return (
      <section 
        className={`m-1 overflow-hidden transition-all duration-200 delay-[0ms]
        category-${display ? 'display' : 'hide'}`}
      >
        { categories.map(({ id, name }) => (
          <label 
            key={id} 
            className='group cursor-pointer inline-block rounded-md m-1 
            px-1 category-shadow'
          >
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
      </section>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
};

export default Categories;
