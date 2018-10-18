import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
    <input
      className='pa3 ba b-red bg-lightest-blue'
      type="search"
      placeholder='Search Your robot'
    onChange={searchChange}/>
    </div>
  );
}

export default SearchBox
