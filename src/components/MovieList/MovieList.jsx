import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';
import PropTypes from 'prop-types';
import NoData from '../shared/NoData/NoData';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import MovieControl from '../MovieControl/MovieControl';
import { useNavigate, useSearchParams } from 'react-router';
import GeneralLoader from '../shared/GeneralLoader/GeneralLoader';

const MovieList = ({ movieList, isError, isLoading, onMovieDelete }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onMovieSelect = (id) => {
    navigate({
      pathname: `/${id}`,
      search: searchParams.toString()
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <>
      {isLoading && (
        <div className='loader-wrapper'>
          <GeneralLoader />
        </div>
      )}
      <ul className='movie-list'>
        {movieList.map((item) => (
          <li key={item.id} id={item.id}>
            <MovieItem movieData={item} onClick={() => onMovieSelect(item.id)} />
            <MovieControl movieData={item} onMovieDelete={onMovieDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onMovieDelete: PropTypes.func.isRequired
};

export default MovieList;
