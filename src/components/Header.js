import React from 'react';
import PropTypes from 'prop-types';
import CartModal from './CartModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class Header extends React.Component {
  state = {
    display: false
  };

  modalToggle = () => {
    this.setState(({display}) => ({
      display: !display
    }));
  };

  render = () => (
    <header className='bg-rose-600 flex sticky top-0'>
      <h1 className='text-white text-2xl p-3 font-semibold'>TrybeStore</h1>
      <div className='flex grow justify-between'>
        <div className='flex grow justify-center'>
          {this.props.children}
        </div>
        <button onClick={this.modalToggle} className="mr-3">
          <ShoppingCartIcon className='text-rose-50'/>
        </button>
      </div>
      <CartModal 
        display={this.state.display}
        modalToggle={this.modalToggle}
      />
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Header;
