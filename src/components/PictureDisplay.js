import React from "react";
import PropTypes from 'prop-types';
import './PictureDisplay.css';

class PictureDisplay extends React.Component {
  state = {
    index: 0,
  };

  render(){
    const { pictures } = this.props;
    const { index } = this.state;
    return(
      <div className="bg-white rounded-xl m-2 main-card-shadow flex flex-col
      sm:flex-row-reverse justify-center sm:w-1/2 md:w-3/5 h-[500px]
      sm:justify-around">
        <img src={pictures[index].url} className="object-contain h-2/3 sm:h-full
        sm:w-2/3"/>
        <div className="grid overflow-auto grid-flow-col sm:grid-flow-row scroll-hidden
        sm:w-fit gap-2 mx-2 sm:mx-0 sm:my-2 p-2">
          { pictures.map(({ url, id }, i) => (
            <button 
              key={id}
              onClick={() => this.setState(() => ({
                index: i,
              }))} 
              className="w-20 h-20 relative group overflow-hidden"
            >
              <img src={url} className="button" />
              <div className={`absolute bg-white w-full h-full top-0 left-0
              opacity-${ (index !== i) * 30 } group-hover:opacity-0 transition-all 
              duration-150`}/>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

PictureDisplay.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PictureDisplay;