import React from 'react';
import FullStar from '@mui/icons-material/Star';
import EmptyStar from '@mui/icons-material/StarBorder';
import HalfStar from '@mui/icons-material/StarHalf';
import PropTypes from 'prop-types';
import '../../../components/StarDisplay.css';

const StarInput = (props) => {
  const { className, name, onChange } = props;
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
    <div>
      {stars.map((el, i) => (
        <label key={i}>
          {el}
          <input 
            type="radio" 
            id={`rate-input-${i}`} 
            name={name}
            onChange={onChange}  
            value={i + 1}
            className="hidden"
          />
        </label>
      ))}
    </div>);
};

StarInput.propTypes = {
  rate: PropTypes.number.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

StarInput.defaultProps = {
  className: 'text-rose-600'
};

export default StarInput;