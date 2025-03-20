import React from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genreList = [], selectedGenre, onSelect }) => {
  const isSelectedGenre = (genre) => genre === selectedGenre;

  const onSearch = ({ target }) => {
    if (target.tagName === 'LI') {
      onSelect(target.id);
    }
  };

  return (
    <div className='genre'>
      <ul onClick={onSearch}>
        {genreList.map((genre, index) => (
          <li key={index} id={genre} className={isSelectedGenre(genre) ? 'selected' : ''}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
