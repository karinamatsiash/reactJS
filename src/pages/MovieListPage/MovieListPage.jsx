import React, { useEffect, useRef, useState } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MoviesTopSection from '../../components/MoviesTopSection/MoviesTopSection';
import './MovieListPage.scss';
import MovieToolbar from '../../components/MovieToolbar/MovieToolbar';
import MovieList from '../../components/MovieList/MovieList';
import { GENRES } from '../../constants/Genres';
import { getSortOptionState } from '../../utils/getSortOptionState';
import { fetchMovieList } from '../../api/fetchMovieList';
import { formatMoviesResponse } from '../../utils/formatMoviesResponse';
import classNames from 'classnames';
import { formatMoviesRequestParams } from '../../utils/formatMoviesRequestParams';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterione] = useState(null);
  const [activeGenre, setActiveGenre] = useState(GENRES[0]);
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const controllerRef = useRef(null);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    getMoviesList();

    return () => controllerRef.current?.abort();
  }, [searchQuery, sortCriterion, activeGenre]);

  const onSearchQueryChange = (value) => setSearchQuery(value);
  const onSearchClick = () => setSelectedMovie(null);

  const handleSort = (newOption) => {
    setSortCriterione((prevState) => {
      const state = getSortOptionState(prevState, newOption);
      return state ? { option: newOption, state } : null;
    });
  };

  const openMovieDetails = (id) => {
    setSelectedMovie(findMovieById(id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getMoviesList = () => {
    setIsLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchData = async () => {
      const { result, isError } = await fetchMovieList(
        formatMoviesRequestParams(searchQuery, sortCriterion, activeGenre),
        controller
      );
      if (result?.data) {
        setMovieList(formatMoviesResponse(result.data));
      }
      setIsError(isError);
      setIsLoading(false);
    };

    fetchData();
  };

  const findMovieById = (id) => movieList.find((item) => item.id === id);

  return (
    <div
      className={classNames('movies', {
        'movies--empty': isLoading || !movieList?.length || isError
      })}
    >
      <div className='movies_top'>
        {selectedMovie ? (
          <MovieDetails
            movieData={selectedMovie}
            onSearchClick={onSearchClick}
          ></MovieDetails>
        ) : (
          <MoviesTopSection onSearch={onSearchQueryChange} initialValue={searchQuery} />
        )}
      </div>

      <div className='movies_body'>
        <MovieToolbar
          selectedGenre={activeGenre}
          genreList={GENRES}
          onGenreSelect={setActiveGenre}
          selectedSort={sortCriterion}
          onSortBy={handleSort}
        ></MovieToolbar>

        <MovieList
          movieList={movieList}
          isLoading={isLoading}
          isError={isError}
          onMovieSelect={openMovieDetails}
          onMovieDelete={getMoviesList}
        />
      </div>
    </div>
  );
};

export default MovieListPage;
