import React, { useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import { GENRES } from './constants/genreList';

const App = () => {
  const [genre, setGenre] = useState(GENRES[0]);

  const printSearchValue = (value) => console.log(`Search value: ${value}`);

  return (
    <div className='app'>
      <Counter initialValue={1} />
      <SearchForm onSearch={printSearchValue} />
      <GenreSelect genreList={GENRES} selectedGenre={genre} onSelect={setGenre} />
    </div>
  );
};

export default App;
