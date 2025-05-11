import React from 'react';
import './MovieDetails.scss';
import MoviePoster from '../shared/MoviePoster/MoviePoster';
import { VscSearch } from 'react-icons/vsc';
import MovieGenres from '../shared/MovieGenres/MovieGenres';
import PropTypes from 'prop-types';
import { formatMovieResponse } from '../../utils/formatMoviesResponse';
import { Link, useLoaderData, useSearchParams } from 'react-router';

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const { movieData } = useLoaderData();
  const { imageUrl, name, rating, releaseDate, duration, genres, description } =
    formatMovieResponse(movieData.result);

  return (
    <div className='movie-details'>
      <header className='movie-header'>
        <div className='movie-header_label'>{'netflixroulette'}</div>
        <Link to={{ pathname: '/', search: searchParams.toString() }}>
          <VscSearch className='movie-header_search' />
        </Link>
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
            <div className='additional-info_year'>
              {new Date(releaseDate).getFullYear()}
            </div>
            <div className='additional-info_duration'>{duration}</div>
          </div>

          <div className='movie-info_description'>{description}</div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  onSearchClick: PropTypes.func.isRequired
};

export default MovieDetails;
