import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';
import PropTypes from 'prop-types';
import NoData from '../shared/NoData/NoData';
import Loader from '../shared/Loader/Loader';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import MovieControl from '../MovieControl/MovieControl';

const MovieList = ({ movieList, onMovieSelect, isError, isLoading, onMovieDelete }) => {
  const onMovieClick = (event) => {
    // TODO: event.target is IMG instead of LI
    const listItem = event.target.closest('li');

    if (!listItem) return;

    onMovieSelect(+listItem.id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError && !isLoading) {
    return (
      <div className='movies-error'>
        <ErrorMessage errorMessage={'Something went wrong'} />
      </div>
    );
  }

  if (!movieList?.length && !isLoading) {
    return <NoData />;
  }

  return (
    <ul className='movie-list'>
      {movieList.map((item) => (
        <li key={item.id} id={item.id} onClick={onMovieClick}>
          <MovieItem movieData={item} />
          <MovieControl movieData={item} onMovieDelete={onMovieDelete} />
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieDelete: PropTypes.func.isRequired
};

export default MovieList;
