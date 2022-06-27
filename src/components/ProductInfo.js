import React from "react";
import PropTypes from 'prop-types';
import StarDisplay from "./StarDisplay";

const ProductInfo = (props) => {
  const { title, description, reviews } = props;
  return (
    <div>
      <h1 className="mx-2 font-roboto font-medium text-xl text-justify">
        {title}
      </h1>
      <div className="m-2">
        <p className="flex items-baseline mb-2">
          <StarDisplay 
            className="text-rose-600 text-xl inline-icon"
            rate={ reviews.rating_average }
            alt="Estrelas"
          />
          <span className="font-roboto ml-2 text-lg">
            { reviews.rating_average.toFixed(1) }
          </span>
        </p>
        <p className="text-sm font-sans text-justify">{description.plain_text}</p>
      </div>
    </div>
  );};

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    plain_text: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.shape({
    rating_average: PropTypes.number.isRequired,
  })
};

export default ProductInfo;