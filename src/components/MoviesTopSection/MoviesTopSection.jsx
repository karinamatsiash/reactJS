import React, { useState } from 'react';
import './MoviesTopSection.scss';
import PropTypes from 'prop-types';
import MovieForm from '../MovieForm/MovieForm';
import Dialog from '../shared/Dialog/Dialog';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParam } from '../../utils/searchParams/updateSearchParam';

const DEFAULT_WIDTH = 400;

const MoviesTopSection = ({ width = DEFAULT_WIDTH }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get('search') || '');
  const [movieData, setMovieData] = useState({});
  const [shouldShowMovieDialog, setShouldShowMovieDialog] = useState(false);

  const onSearchClick = () => updateSearchValue(value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      updateSearchValue(target.value);
    }
  };

  const updateSearchValue = (search) =>
    setSearchParams(updateSearchParam(searchParams, { search }));

  const showMovieDialog = () => setShouldShowMovieDialog(true);
  const closeMovieDialog = () => setShouldShowMovieDialog(false);

  const onAddMovieSubmit = (formData) => {
    setMovieData(formData);
    closeMovieDialog();
  };

  return (
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
          style={{ width: `${width}px` }}
        />
        <Button cta={true} onClick={onSearchClick}>
          {'SEARCH'}
        </Button>
      </div>

      {shouldShowMovieDialog && (
        <Dialog onClose={closeMovieDialog} title={'ADD MOVIE'}>
          <MovieForm onSubmit={onAddMovieSubmit} movieData={movieData} />
        </Dialog>
      )}
    </div>
  );
};

MoviesTopSection.propTypes = {
  width: PropTypes.number
};

export default MoviesTopSection;
