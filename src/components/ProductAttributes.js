import React from "react";
import PropTypes from 'prop-types';
import './ProductAttributes.css';
import ArrowDown from '@mui/icons-material/ArrowDropDownRounded';


class ProductAttributes extends React.Component {
  state = {
    display: false,
  };

  render() {
    const { display } = this.state;
    const { attributes } = this.props;
    return (
      <div className="flex flex-col border-[1px] border-neutral-400
      m-1 rounded-md" id="attributes-table">
        <button
          onClick={() => this.setState(({display}) => ({
            display: !display
          }))}
          className="p-3"
        >
          Mostrar atributos
          <ArrowDown className={`${ display && 'rotate-180'}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-out
        ${ display ? 'display' : 'hide'}`}>
          <table>
            <tbody>
              { attributes.map(({ name, value_name, id }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{value_name}</td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
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