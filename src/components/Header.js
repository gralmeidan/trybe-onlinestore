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
    <header className='bg-rose-600 flex sticky top-0 z-30'>
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
        cartItems={this.props.cartItems}
        modalToggle={this.modalToggle}
        addToCart={this.props.addToCart}
        removeFromCart={this.props.removeFromCart}
      />
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  cartItems: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Header;
