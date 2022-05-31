import React from "react";
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <p>
        {title}
      </p>
    );
  }
}

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CartCard;
