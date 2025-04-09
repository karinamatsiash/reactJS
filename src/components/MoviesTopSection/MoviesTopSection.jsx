import React, { useState } from 'react';
import './MoviesTopSection.scss';
import PropTypes from 'prop-types';
import MovieForm from '../MovieForm/MovieForm';
import Dialog from '../shared/Dialog/Dialog';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';

const DEFAULT_WIDTH = 400;

const MoviesTopSection = ({ initialValue = '', width = DEFAULT_WIDTH, onSearch }) => {
  const [value, setValue] = useState(initialValue);
  const [movieData, setMovieData] = useState({});
  const [shouldShowMovieDialog, setShouldShowMovieDialog] = useState(false);

  const onSearchClick = () => onSearch(value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      onSearch(target.value);
    }
  };

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
  initialValue: PropTypes.string,
  width: PropTypes.number,
  onSearch: PropTypes.func.isRequired
};

export default MoviesTopSection;
