import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends React.Component {
  render() {
    return(
      <div className='self-center bg-rose-500 h-8 w-3/4 rounded-xl flex
      items-center px-2 text-white'>
        <input type='text' className='grow bg-transparent 
        focus-visible:outline-none mr-1 font-semibold
        font-roboto'
        {...this.props}
        />
        <SearchIcon/>
      </div>
    );
  }
}

export default SearchBar;