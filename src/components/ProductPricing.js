import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formattedPrice } from '../helpers/formatting';
import ArrowDown from '@mui/icons-material/ArrowDropDownRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductPricing = (props) => {
  const {price, original_price: op, shipping: { free_shipping }, addToCart} = props;
  const discount = op ? 100 - ((100 * price) / op).toFixed() : undefined;

  const [CEP, setCEP] = useState('');
  const [shipping, setShipping] = useState({
    prazo: undefined,
    preco: undefined,
  });

  const handleCEPChange = (event) => {
    const { nativeEvent: { inputType }} = event;
    let { value } = event.target;
    if(inputType === 'insertText') {
      if((!value.match(/^\d{1,5}-?\d{0,3}$/)) || value.length > 9) return;
      if(value.length === 5 && !value.match('-')) value += '-';
    }
    setCEP(value);
  };

  const handleShippingCalc = () => {
    if(!CEP.match(/^\d{5}-\d{3}$/)) {
      alert('CEP INVÁLIDO');
      return;
    }
    const CEPNum = (parseInt(CEP.replace('-','')) * 3) / 5;
    setShipping({
      prazo: parseInt(CEPNum.toString()[1]),
      preco: parseInt((CEPNum / 5).toString().substring(0,2))
    });
  };

  return (
    <div className='m-2'>
      <div className='mb-4'>
        {discount && (
          <p>
            <span className="text-neutral-500 line-through mr-1 font-roboto">
            R$ {formattedPrice(op)}
            </span>
            <span className="bg-emerald-500 rounded-md text-xs p-[2px]
          text-white font-semibold font-roboto">
              <ArrowDown 
                className='-m-1'
              />
              {discount}%
            </span>
          </p>
        )}
        <p
          className='font-roboto text-3xl font-semibold'
        >R$ {formattedPrice(price)}</p>
      </div>
      <div className='w-fit m-auto'>
        <p>Calcular {!free_shipping && 'frete e '}prazo</p>
        <div className='flex'>
          <input 
            type='text'
            placeholder='CEP: _____-___'  
            value={CEP}
            onChange={handleCEPChange}
            className="border-[1px] border-neutral-400 rounded-sm pl-2 mr-2
            focus:outline-rose-600"
          />
          <button
            onClick={handleShippingCalc}
            className="border-rose-600 border-2 px-2 font-roboto font-semibold
          text-rose-600 rounded-md py-1 hover:bg-rose-600 hover:text-white
          transition-all"
          >
          OK
          </button>
        </div>
        {
          shipping.prazo && (
            <p className='text-neutral-700 mt-1'
            >{shipping.prazo} - {shipping.prazo + 5} dias <br />{
                !free_shipping && `R$ ${formattedPrice(shipping.preco + 30)}`
              }</p>
          )
        }
      </div>
      <button
        onClick={() => {
          addToCart({ ...props });
        }}
        className="p-2 w-full bg-rose-600 font-roboto font-semibold text-white
        text-lg rounded-lg my-4"
      >
        Adicionar ao carrinho
        <AddShoppingCartIcon className="hover:text-rose-600
            active:text-rose-900 ml-4" alt="add to cart"/>
      </button>
    </div>
  );};

ProductPricing.propTypes = {
  price: PropTypes.number.isRequired,
  original_price: PropTypes.number,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};

ProductPricing.defaultProps = {
  original_price: undefined,
};

export default ProductPricing;