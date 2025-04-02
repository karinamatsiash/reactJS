import React, { useState } from 'react';
import './MoviesPanel.scss';
import { GENRES } from '../../constants/GenreList';
import MovieList from './MovieList/MovieList';
import MovieToolbar from './MovieToolbar/MovieToolbar';
import { getSortOptionState } from '../../utils/getSortState';
import PropTypes from 'prop-types';

const MoviesPanel = ({ movieList, openMovieDetails }) => {
  const [genre, setGenre] = useState(GENRES[0]);
  const [sort, setSort] = useState(null);

  const handleSort = (newOption) => {
    setSort((prevState) => {
      const state = getSortOptionState(prevState, newOption);
      return state ? { option: newOption, state } : null;
    });
  };

  return (
    <div className='movies-panel'>
      <MovieToolbar
        selectedGenre={genre}
        genreList={GENRES}
        onGenreSelect={setGenre}
        selectedSort={sort}
        onSortBy={handleSort}
      ></MovieToolbar>
      <MovieList movieList={movieList} onMovieSelect={openMovieDetails}></MovieList>
    </div>
  );
};

MoviesPanel.propTypes = {
  movieList: PropTypes.array,
  openMovieDetails: PropTypes.func.isRequired
};

export default MoviesPanel;
