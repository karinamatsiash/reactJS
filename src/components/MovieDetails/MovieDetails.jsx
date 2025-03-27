import React from 'react';
import './MovieDetails.scss';
import MoviePoster from '../shared/MoviePoster/MoviePoster';
import { VscSearch } from 'react-icons/vsc';
import MovieGenres from '../shared/MovieGenres/MovieGenres';

const MovieDetails = ({ movieData, onSearchClick }) => {
  const { imageUrl, name, rating, releaseYear, duration, genres, description } = movieData;

  return (
    <div className='movie-details'>
      <header className='movie-header'>
        <div className='movie-header_label'>{'netflixroulette'}</div>
        <VscSearch className='movie-header_search' onClick={onSearchClick} />
      </header>

      <div className='d-flex'>
        <MoviePoster imageUrl={imageUrl}></MoviePoster>

        <div className='movie-info'>
          <div className='movie-title d-flex'>
            <div className='movie-title_name'>{name}</div>
            <div className='movie-title_rating d-flex'>{rating}</div>
          </div>

          <MovieGenres genres={genres}></MovieGenres>

          <div className='additional-info d-flex'>
            <div className='additional-info_year'>{releaseYear}</div>
            <div className='additional-info_duration'>{duration}</div>
          </div>

          <div className='movie-info_description'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
