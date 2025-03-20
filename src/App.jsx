import React, { useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';

const GENRES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

const App = () => {
  const [genre, setGenre] = useState(GENRES[0]);

  return (
    <div className='app'>
      <Counter initialValue={1} />
      <SearchForm />
      <GenreSelect genreList={GENRES} selectedGenre={genre} onSelect={setGenre} />
    </div>
  );
};

export default App;
