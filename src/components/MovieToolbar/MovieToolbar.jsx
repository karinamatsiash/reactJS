import React from 'react';
import './MovieToolbar.scss';
import GenreSelect from '../GenreSelect/GenreSelect';
import PropTypes from 'prop-types';
import MovieSort from '../MovieSort/MovieSort';

export const MovieToolbar = ({
  selectedSort,
  selectedGenre,
  onSortBy,
  genreList,
  onGenreSelect
}) => {
  return (
    <div className='movie-toolbar'>
      <GenreSelect
        genreList={genreList}
        selectedGenre={selectedGenre}
        onSelect={onGenreSelect}
      />
      <MovieSort selectedSort={selectedSort} onSortBy={onSortBy}></MovieSort>
    </div>
  );
};

MovieToolbar.propTypes = {
  selectedSort: PropTypes.object,
  selectedGenre: PropTypes.string.isRequired,
  genreList: PropTypes.array.isRequired,
  onSortBy: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};

export default MovieToolbar;
