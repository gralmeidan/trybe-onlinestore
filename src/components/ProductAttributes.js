import React from "react";
import PropTypes from 'prop-types';
import './ProductAttributes.css';

class ProductAttributes extends React.Component {
  render() {
    const { attributes } = this.props;
    return (
      <table id="attributes-table" className="mx-1">
        <tbody>
          { attributes.map(({ name, value_name, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{value_name}</td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

ProductAttributes.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value_name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductAttributes;