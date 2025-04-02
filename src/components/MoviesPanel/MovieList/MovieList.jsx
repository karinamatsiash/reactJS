import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import './MovieList.scss';
import PropTypes from 'prop-types';

const MovieList = ({ movieList, onMovieSelect }) => {
  const onMovieClick = ({ currentTarget }) => onMovieSelect(currentTarget.id);

  return (
    <ul className='movie-list'>
      {movieList.map((item) => (
        <li key={item.id} id={item.id} onClick={onMovieClick}>
          <MovieItem movieData={item} />
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
