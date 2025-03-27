import React from 'react';
import './MovieToolbar.scss';
import GenreSelect from './GenreSelect/GenreSelect';
import MovieSort from './MovieSort/MovieSort';

export const MovieToolbar = ({ selectedSort, selectedGenre, onSortBy, genreList, onGenreSelect }) => {
  return (
    <div className='movie-toolbar'>
      <GenreSelect genreList={genreList} selectedGenre={selectedGenre} onSelect={onGenreSelect} />
      <MovieSort selectedSort={selectedSort} onSortBy={onSortBy}></MovieSort>
    </div>
  );
};

export default MovieToolbar;
