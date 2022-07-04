import React, { useState } from "react";
import PropTypes from 'prop-types';
import StarDisplay from "../../components/StarDisplay";
import './ProductInfo.css';

const ProductInfo = (props) => {
  const [ hideDescription, setHideDescription] = useState(true);
  const [ showLink, setShowLink] = useState(false);
  const { title, description, reviews } = props;
  const ref = React.createRef();

  React.useLayoutEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setShowLink(true);
    }
  }, [ref]);

  return (
    <div className="md:w-2/4">
      <h1 className="mx-2 font-roboto font-medium text-xl text-justify md:text-left">
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
        <p 
          className={`text-sm font-sans text-justify 
          ${ hideDescription && 'prod-info-description'}`}
          ref={ref}
        >{description.plain_text}</p>
        <button
          className={`hidden ${showLink && 'md:block'} font-roboto 
          text-sm underline text-rose-600`}
          onClick={() => setHideDescription(prev => !prev)}
        >Mostrar { hideDescription ? 'mais' : 'menos'}</button> 
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