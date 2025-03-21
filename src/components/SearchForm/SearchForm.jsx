import React from 'react';
import { useState } from 'react';
import './SearchForm.scss';

const SearchForm = ({ initialValue = '' }) => {
  const [value, setValue] = useState(initialValue);

  const onSearch = () => printSearchValue(value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      printSearchValue(target.value);
    }
  };

  const printSearchValue = (value) => console.log(`Search value: ${value}`);

  return (
    <div className='search-form'>
      <input
        type='text'
        defaultValue={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder='What do you want to watch?'
      ></input>
      <button onClick={onSearch}>{'SEARCH'}</button>
    </div>
  );
};

export default SearchForm;
