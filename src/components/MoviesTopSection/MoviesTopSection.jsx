import React, { useState } from 'react';
import './MoviesTopSection.scss';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import { updateSearchParam } from '../../utils/searchParams/updateSearchParam';
import { Outlet, useNavigate, useSearchParams } from 'react-router';

const DEFAULT_WIDTH = 400;

const MoviesTopSection = ({ width = DEFAULT_WIDTH }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');

  const onSearchClick = () => updateSearchValue(value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      updateSearchValue(target.value);
    }
  };

  const updateSearchValue = (search) =>
    setSearchParams(updateSearchParam(searchParams, { search }), {
      preventScrollReset: true
    });

  const showMovieDialog = () =>
    navigate({
      pathname: `/new`,
      search: searchParams.toString()
    });

  return (
    <>
      <div className='search-form'>
        <div className='search-form_background'></div>

        <div className='search-form_add-button'>
          <Button transparent={true} onClick={showMovieDialog}>
            + ADD MOVIE
          </Button>
        </div>

        <div className='search-form_title'>{'FIND YOUR MOVIE'}</div>
        <div className='search-form_search'>
          <Input
            type='text'
            className='auto'
            value={value}
            onKeyDown={onKeyDown}
            onChange={onChange}
            placeholder='What do you want to watch?'
            isValid={true}
            style={{ width: `${width}px` }}
          />
          <Button cta={true} onClick={onSearchClick}>
            {'SEARCH'}
          </Button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

MoviesTopSection.propTypes = {
  width: PropTypes.number
};

export default MoviesTopSection;
