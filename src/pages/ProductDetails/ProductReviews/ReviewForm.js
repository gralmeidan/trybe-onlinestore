import React from "react";
import StarInput from "./StarInput";
import PropTypes from 'prop-types';
import moment from "moment";

class ReviewForm extends React.Component {
  state={
    title: '',
    content: '',
    rate: 0,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { submit, reviewable_object } = this.props;
    const { title, rate, content } = this.state;

    submit({
      date_created: moment().format(),
      content,
      title,
      rate: parseInt(rate),
      id: Math.floor(Math.random() * 5468798156),
      relevance: 0,
      reviewable_object,
    });

    this.setState(() => ({
      title: '',
      content: '',
      rate: 0,
    }));
  };

  render() {
    const { title, content, rate } = this.state;
    return (
      <form className="font-roboto">
        <h2>Deixe uma review</h2>
        <input
          placeholder="Título"
          name="title"
          value={ title }
          onChange={this.handleChange}
          className="text-input w-full p-2 my-1"
          maxLength={50}
        />
        <textarea
          placeholder="Conteúdo"
          name="content"
          value={ content }
          onChange={this.handleChange}
          className="text-input w-full p-2 my-1"
          maxLength={300}
        />
        <div className="flex justify-between">
          <StarInput 
            rate={parseInt(rate)}
            name='rate'
            onChange={this.handleChange}  
            className='text-rose-600 cursor-pointer'
          />
          <button
            className="btn-bordered"
            onClick={this.handleSubmit}
            disabled={ content === '' && title === ''}
          >
          Enviar
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  submit: PropTypes.func.isRequired,
  reviewable_object: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewForm;