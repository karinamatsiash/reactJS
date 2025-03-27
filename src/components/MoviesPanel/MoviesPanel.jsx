import React, { useState } from 'react';
import './MoviesPanel.scss';
import { GENRES } from '../../constants/genreList';
import MovieList from './MovieList/MovieList';
import GenreSelect from './GenreSelect/GenreSelect';

const MoviesPanel = ({ movieList, openMovieDetails }) => {
  const [genre, setGenre] = useState(GENRES[0]);

  return (
    <div className='movies-panel'>
      <GenreSelect genreList={GENRES} selectedGenre={genre} onSelect={setGenre} />
      <MovieList movieList={movieList} onMovieSelect={openMovieDetails}></MovieList>
    </div>
  );
};

export default MoviesPanel;
