import React from 'react';
import './GenreSelect.scss';
import classNames from 'classnames';

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
          <li key={genre} id={genre} className={classNames({ selected: isSelectedGenre(genre) })}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
