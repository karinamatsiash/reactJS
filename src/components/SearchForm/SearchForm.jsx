import React, { useState } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';

const DEFAULT_WIDTH = 400;

const SearchForm = ({ initialValue = '', width = DEFAULT_WIDTH, onSearch }) => {
  const [value, setValue] = useState(initialValue);

  const onSearchClick = () => onSearch(value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      onSearch(target.value);
    }
  };

  return (
    <div className='search-form'>
      <div className='search-form_background'></div>
      <div className='search-form_title'>{'FIND YOUR MOVIE'}</div>
      <div>
        <input
          type='text'
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder='What do you want to watch?'
          style={{ width: `${width}px` }}
        ></input>
        <button onClick={onSearchClick}>{'SEARCH'}</button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  initialValue: PropTypes.string,
  width: PropTypes.number,
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
