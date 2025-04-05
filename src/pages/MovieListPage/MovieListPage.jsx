import React, { useState } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import SearchForm from '../../components/SearchForm/SearchForm';
import './MovieListPage.scss';
import MovieToolbar from '../../components/MovieToolbar/MovieToolbar';
import MovieList from '../../components/MovieList/MovieList';
import { GENRES } from '../../constants/GenreList';
import { getSortOptionState } from '../../utils/getSortState';
import { MOVIES_LIST } from '../../constants/MoviesList';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterione] = useState(null);
  const [activeGenre, setActiveGenre] = useState(GENRES[0]);
  const [movieList] = useState(MOVIES_LIST);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    console.log('Movie has been selected', id);
  };

  const findMovieById = (id) => {
    return movieList.find((item) => item.id === id);
  };

  return (
    <div className='movies'>
      <div className='movies_top'>
        {selectedMovie ? (
          <MovieDetails
            movieData={selectedMovie}
            onSearchClick={onSearchClick}
          ></MovieDetails>
        ) : (
          <SearchForm onSearch={onSearchQueryChange} initialValue={searchQuery} />
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
        <MovieList movieList={movieList} onMovieSelect={openMovieDetails}></MovieList>
      </div>
    </div>
  );
};

export default MovieListPage;
