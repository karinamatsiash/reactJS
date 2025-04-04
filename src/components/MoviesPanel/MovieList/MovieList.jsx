import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import './MovieList.scss';
import PropTypes from 'prop-types';

const MovieList = ({ movieList, onMovieSelect }) => {
  const onMovieClick = ({ target }) => {
    const closestListItem = target.closest('LI');
    if (closestListItem) {
      onMovieSelect(closestListItem.id);
    }
  };

  return (
    <ul className='movie-list' onClick={onMovieClick}>
      {movieList.map((item) => (
        <li key={item.id} id={item.id}>
          <MovieItem movieData={item}></MovieItem>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  onMovieSelect: PropTypes.func.isRequired
};

export default MovieList;
