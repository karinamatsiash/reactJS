import React, { useEffect, useRef, useState } from 'react';
import './MovieListPage.scss';
import MovieToolbar from '../../components/MovieToolbar/MovieToolbar';
import MovieList from '../../components/MovieList/MovieList';
import { DEFAULT_GENRE, GENRES } from '../../constants/Genres';
import { getSortOptionState } from '../../utils/getSortOptionState';
import { fetchMovieList } from '../../api/fetchMovieList';
import { formatMoviesResponse } from '../../utils/formatMoviesResponse';
import classNames from 'classnames';
import { formatMoviesRequestParams } from '../../utils/formatMoviesRequestParams';
import { Outlet, useSearchParams } from 'react-router';
import { updateSearchParam } from '../../utils/searchParams/updateSearchParam';
import { getSortFromSearchParams } from '../../utils/searchParams/getSortFromSearchParams';
import { getGenreFromSearchParams } from '../../utils/searchParams/getGenreFromSearchParams';

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const [sortCriterion, setSortCriterion] = useState(
    getSortFromSearchParams(searchParams)
  );
  const [activeGenre, setActiveGenre] = useState(getGenreFromSearchParams(searchParams));
  const [movieList, setMovieList] = useState([]);
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

  const onSortChange = (option) => {
    const state = getSortOptionState(sortCriterion, option);
    const newSortCriterion = state ? { option, state } : null;

    setSearchParams(
      updateSearchParam(searchParams, {
        sortOption: newSortCriterion?.option,
        sortState: newSortCriterion?.state
      }),
      { preventScrollReset: true }
    );
    setSortCriterion(newSortCriterion);
  };

  const onGenreChange = (genre) => {
    const genreParam = genre === DEFAULT_GENRE ? null : genre;
    setSearchParams(updateSearchParam(searchParams, { genre: genreParam }), {
      preventScrollReset: true
    });
    setActiveGenre(genre);
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

  return (
    <div
      className={classNames('movies', {
        'movies--empty': !movieList?.length || isError
      })}
    >
      <div className='movies_top'>
        <Outlet />
      </div>

      <div className='movies_body'>
        <MovieToolbar
          selectedGenre={activeGenre}
          genreList={GENRES}
          onGenreSelect={onGenreChange}
          selectedSort={sortCriterion}
          onSortBy={onSortChange}
        ></MovieToolbar>

        <MovieList
          movieList={movieList}
          isLoading={isLoading}
          isError={isError}
          onMovieDelete={getMoviesList}
        />
      </div>
    </div>
  );
};

export default MovieListPage;
