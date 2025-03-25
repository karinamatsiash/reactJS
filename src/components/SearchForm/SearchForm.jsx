import React from 'react';
import { useState } from 'react';
import './SearchForm.scss';

const SearchForm = ({ initialValue = '', onSearch }) => {
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
      <input
        type='text'
        defaultValue={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder='What do you want to watch?'
      ></input>
      <button onClick={onSearchClick}>{'SEARCH'}</button>
    </div>
  );
};

export default SearchForm;
