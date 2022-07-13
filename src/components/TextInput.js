import React from "react";
import PropTypes from 'prop-types';

const TextInput = ({ name, label, handleChange }) => (
  <div className="flex flex-col-reverse items-start">
    <input
      id={name}
      name={name} 
      className="text-input fancy-input"
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
};

export default TextInput;