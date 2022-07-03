import React from 'react';
import PropTypes from 'prop-types';
import StarDisplay from '../../../components/StarDisplay';
import moment from 'moment';
import 'moment/locale/pt-br';

class ReviewCard extends React.Component {
  render() {
    const { title, content, rate, date_created } = this.props;
    return (
      <div className='my-1'>
        <StarDisplay rate={rate} className="text-rose-600 my-2 -ml-1"/>
        <h2 className='font-semibold font-roboto'>{title}</h2>
        <p className='text-sm text-justify'>
          {content}
          {' '}
          <span
            className='font-light text-neutral-800'
          >{moment(date_created).locale('pt-br').fromNow()}</span>
        </p>
        <hr className='my-2'/>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  date_created: PropTypes.string.isRequired,
};

export default ReviewCard;