import React from 'react';
import './MovieGenres.scss';
import PropTypes from 'prop-types';

const MovieGenres = ({ genres }) => <div className='movie_genres'>{genres}</div>;

MovieGenres.propTypes = {
  genres: PropTypes.string.isRequired
};

export default MovieGenres;
