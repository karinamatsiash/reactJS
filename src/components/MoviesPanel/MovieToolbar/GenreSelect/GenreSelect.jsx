import React from 'react';
import './GenreSelect.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
          <li
            key={genre}
            id={genre}
            className={classNames({ selected: isSelectedGenre(genre) })}
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

GenreSelect.propTypes = {
  genreList: PropTypes.array,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default GenreSelect;
