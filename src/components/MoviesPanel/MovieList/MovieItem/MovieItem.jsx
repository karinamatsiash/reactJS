import React from 'react';
import './MovieItem.scss';
import MoviePoster from '../../../shared/MoviePoster/MoviePoster';
import MovieGenres from '../../../shared/MovieGenres/MovieGenres';
import PropTypes from 'prop-types';

const MovieItem = ({ movieData }) => {
  const { imageUrl, name, releaseYear, genres } = movieData;

  return (
    <div className='movie'>
      <MoviePoster imageUrl={imageUrl}></MoviePoster>
      <div className='movie_info'>
        <div className='movie_name'>{name}</div>
        <div className='movie_year'>{releaseYear}</div>
      </div>
      <MovieGenres genres={genres}></MovieGenres>
    </div>
  );
};

MovieItem.propTypes = {
  movieData: PropTypes.object.isRequired
};

export default MovieItem;
