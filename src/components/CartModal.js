import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

class CartModal extends React.Component {
  render() {
    const { display, modalToggle } = this.props;
    return(
      <div 
        className='fixed w-full'
        style={{height: display ? '100vh' : '0'}}
        onClick={modalToggle}  
      >
        <div className={`fixed top-0 right-${display ? '0' : '600-'} bg-gray-900 modal-shadow 
        h-full w-[550px] p-4 modal`}>
          <section className='flex flex-col'>
            <div className='flex justify-between'>
              <ShoppingCartIcon 
                className='text-rose-50 mb-2' 
                fontSize='large' 
                alt="Shopping Cart"
              />
              <button onClick={modalToggle}>
                <CloseIcon 
                  alt="Close Cart"
                />
              </button>
            </div>
            <hr className='border-gray-600'/>
          </section>
        </div>
      </div>
    );
  }
}

CartModal.propTypes = {
  display: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default CartModal;