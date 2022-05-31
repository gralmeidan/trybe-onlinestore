import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import CartCard from './CartCard';

class CartModal extends React.Component {

  render() {
    const { display, modalToggle, cartItems } = this.props;
    return(
      <div 
        className='fixed w-full'
        style={{height: display ? '100vh' : '0'}}
        onClick={modalToggle}  
      >
        <div 
          className={`fixed top-0 right-${display ? '0' : '600-'} 
        bg-gray-900 modal-shadow h-full w-[550px] p-4 modal`}
          onClick={(e) => e.stopPropagation()}
        >
          <section className='flex flex-col'>
            <div className='flex justify-between'>
              <ShoppingCartIcon 
                className='text-rose-50 mb-2' 
                fontSize='large' 
                alt="Shopping Cart"
              />
              <button onClick={modalToggle} className="flex">
                <CloseIcon 
                  alt="Close Cart"
                  className='text-rose-50'
                />
              </button>
            </div>
            <hr className='border-gray-600'/>
            { Object.keys(cartItems).map(id => (
              <CartCard 
                { ...cartItems[id] }
                key={id}
              />
            )) }
          </section>
        </div>
      </div>
    );
  }
}

CartModal.propTypes = {
  display: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
  cartItems: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartModal;