import React from 'react';
import './MovieItem.scss';
import MoviePoster from '../shared/MoviePoster/MoviePoster';
import MovieGenres from '../shared/MovieGenres/MovieGenres';
import PropTypes from 'prop-types';

const MovieItem = ({ movieData, onClick }) => {
  const { imageUrl, name, releaseDate, genres } = movieData;

  return (
    <div className='movie' onClick={onClick}>
      <MoviePoster imageUrl={imageUrl} />

      <div className='movie_info'>
        <div className='movie_name'>{name}</div>
        <div className='movie_year'>{new Date(releaseDate).getFullYear()}</div>
      </div>
      <MovieGenres genres={genres} />
    </div>
  );
};

MovieItem.propTypes = {
  movieData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieItem;
