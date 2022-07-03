import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';

class ProductReviews extends React.Component {
  render() {
    const { reviews } = this.props;
    return (
      <div className='m-2'>
        { reviews.map((review) => (
          <ReviewCard {...review} key={review.id} />
        ))}
      </div>
    );
  }
}

ProductReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ProductReviews;