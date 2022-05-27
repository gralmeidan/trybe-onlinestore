import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render = () => (
    <header className='bg-rose-600 flex'>
      <h1 className='text-white text-2xl p-3 font-semibold'>TrybeStore</h1>
      <div className='flex grow justify-center'>
        {this.props.children}
      </div>
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
