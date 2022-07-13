import React, { useState } from "react";
import TextInput from "./TextInput";

function BuyerForm() {
  const [ inputs, setInputs ] = useState({
    name: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    complemento: '',
    numero: '',
    cidade: '',
  });

  const masks = {
    cpf: value => value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"),
    telefone: value => value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})/, "$1-$2")
      .replace(/(.{15})(\d)/, "$1"),
    cep: value => value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d{1,3})/, "$1-$2")
      .replace(/(.{9})(\d)/, "$1"),

  };

  const onChange = ({ target: { value, name }}) => {
    setInputs(prev => ({
      ...prev,
      [name]: masks[name] ? masks[name](value) : value
    }));
  };

  return (
    <form className="mt-3">
      <h2 className="ml-2 font-roboto text-lg font-semibold mb-1">Informações do comprador</h2>
      <fieldset className="flex flex-wrap items-baseline">
        <TextInput 
          handleChange={onChange}
          value={inputs.name}
          name='name'
          label={'Nome completo'}
        />
        <TextInput 
          handleChange={onChange}
          value={inputs.cpf}
          name='cpf'
          label={'CPF'}
        />
        <TextInput 
          handleChange={onChange}
          value={inputs.email}
          name='email'
          label={'Email'}
        />
        <div className="w-full md:flex">
          <TextInput 
            handleChange={onChange}
            value={inputs.telefone}
            name='telefone'
            label={'Telefone'}
            className="md:grow-0"
          />
          <TextInput 
            handleChange={onChange}
            value={inputs.endereco}
            name='endereco'
            label={'Endereço'}
          />
        </div>
        <TextInput 
          handleChange={onChange}
          value={inputs.cep}
          name='cep'
          label={'CEP'}
        />
        <TextInput 
          handleChange={onChange}
          value={inputs.complemento}
          name='complemento'
          label={'Complemento'}
        />
        <TextInput 
          handleChange={onChange}
          value={inputs.numero}
          name='numero'
          label={'Número'}
        />
        <TextInput 
          handleChange={onChange}
          value={inputs.cidade}
          name='cidade'
          label={'Cidade'}
        />
        <button 
          className="btn-bordered"
          disabled  
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default BuyerForm;