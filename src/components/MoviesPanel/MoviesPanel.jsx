import React, { useState } from 'react';
import './MoviesPanel.scss';
import { GENRES } from '../../constants/genreList';
import MovieList from './MovieList/MovieList';
import MovieToolbar from './MovieToolbar/MovieToolbar';
import { getSortOptionState } from '../../utils/getSortState';

const MoviesPanel = ({ movieList, openMovieDetails }) => {
  const [genre, setGenre] = useState(GENRES[0]);
  const [sort, setSort] = useState(null);

  const addSortOption = (newOption) => {
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
        onSortBy={addSortOption}
      ></MovieToolbar>
      <MovieList movieList={movieList} onMovieSelect={openMovieDetails}></MovieList>
    </div>
  );
};

export default MoviesPanel;
