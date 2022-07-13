import React from "react";
import PropTypes from 'prop-types';

const TextInput = ({ name, label, handleChange, value, className}) => (
  <div className={`flex flex-col-reverse items-start flex-grow mx-2 mt-1 ${className}`}>
    <input
      id={name}
      name={name} 
      value={value}
      className="text-input fancy-input w-full"
      onChange={handleChange}
      placeholder=" "
    />
    <label 
      className="fancy-label" 
      htmlFor={name}>
      {label}
    </label>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: ''
};

export default TextInput;