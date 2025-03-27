import React from 'react';
import './MovieItem.scss';
import MoviePoster from '../../../shared/MoviePoster/MoviePoster';
import MovieGenres from '../../../shared/MovieGenres/MovieGenres';

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

export default MovieItem;
