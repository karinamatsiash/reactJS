import React from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genreList = [], selectedGenre, onSelect }) => {
  const isSelectedGenre = (genre) => genre === selectedGenre;

  const onGenreSelect = ({ target }) => {
    if (target.tagName === 'LI') {
      onSelect(target.id);
    }
  };

  return (
    <div className='genre'>
      <ul onClick={onGenreSelect}>
        {genreList.map((genre) => (
          <li key={genre} id={genre} className={isSelectedGenre(genre) ? 'selected' : ''}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
