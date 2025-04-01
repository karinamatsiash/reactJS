import React, { useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import MoviesPanel from './components/MoviesPanel/MoviesPanel';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { MOVIES_LIST } from './constants/MoviesList';

const App = () => {
  const [movie, setMovie] = useState(null);

  const printSearchValue = (value) => console.log(`Search value: ${value}`);

  const openMovieDetails = (id) => {
    setMovie(findMovieById(id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Movie has been selected', id);
  };

  const onSearchClick = () => setMovie(null);

  const findMovieById = (id) => {
    return MOVIES_LIST.find((item) => item.id === id);
  };

  return (
    <div className='app'>
      <div className='app_top-panel'>
        {movie ? (
          <MovieDetails movieData={movie} onSearchClick={onSearchClick}></MovieDetails>
        ) : (
          <SearchForm onSearch={printSearchValue} />
        )}
      </div>

      <MoviesPanel
        movieList={MOVIES_LIST}
        openMovieDetails={openMovieDetails}
      ></MoviesPanel>
      <Counter initialValue={1} />
    </div>
  );
};

export default App;
