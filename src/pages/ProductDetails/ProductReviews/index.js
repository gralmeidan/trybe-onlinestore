import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import { addUserReview, getUserReviewsOnProduct } from '../../../services/reviewsStorage';

class ProductReviews extends React.Component {
  state = {
    userReviews: []
  };

  componentDidMount = () => {
    const { id } = this.props;
    const userReviews = getUserReviewsOnProduct(id);
    this.setState(() => ({
      userReviews,
    }));
  };

  submitUserReview = (review) => {
    addUserReview(review);
    this.setState(({ userReviews }) => ({
      userReviews: [review, ...userReviews]
    }));
  };

  render() {
    const { userReviews } = this.state;
    const { reviews, id } = this.props;
    return (
      <div className='m-2'>
        <ReviewForm 
          submit={this.submitUserReview}
          reviewable_object={{ id }}  
        />
        { [...userReviews, ...reviews].map((review) => (
          <ReviewCard {...review} key={review.id} />
        ))}
      </div>
    );
  }
}

ProductReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductReviews;