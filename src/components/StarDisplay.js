import React from 'react';
import FullStar from '@mui/icons-material/Star';
import EmptyStar from '@mui/icons-material/StarBorder';
import HalfStar from '@mui/icons-material/StarHalf';
import PropTypes from 'prop-types';
import './StarDisplay.css';

const StarDisplay = (props) => {
  const { className } = props;
  let { rate } = props;
  let stars = [];
  for(let i = 0; i < 5; i++){
    if(rate >= 1) {
      stars.push(
        <FullStar
          key={i}
          className={className}
        />);
    }
    else if(rate > 0) {
      stars.push(
        <HalfStar
          key={i}
          className={className}
        />);
    }
    else {
      stars.push(
        <EmptyStar
          key={i}
          className={className}
        />);
    }
    rate --;
  }
  return(
    <span>
      {stars}
    </span>);
};

StarDisplay.propTypes = {
  rate: PropTypes.number.isRequired,
  className: PropTypes.string,
};

StarDisplay.defaultProps = {
  className: 'text-rose-600'
};

export default StarDisplay;