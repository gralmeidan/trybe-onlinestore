import React from "react";
import PropTypes from 'prop-types';

class MainCard extends React.Component {
  formattedPrice = () => {
    const { price } = this.props;
    return price
      .toFixed(2)
      .toString()
      .replace('.',',');
  };
  render() {
    const { title, thumbnail } = this.props;
    return(
      <div>
        <h2>{title}</h2>
        <img src={thumbnail} alt='' className="w-20" />
        <p>{`R$ ${this.formattedPrice()}`}</p>
      </div>
    );
  }
}

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MainCard;