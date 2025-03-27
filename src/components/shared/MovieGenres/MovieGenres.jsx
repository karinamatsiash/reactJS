import React from 'react';
import './MovieGenres.scss';
import PropTypes from 'prop-types';

const MovieGenres = ({ genres }) => (
  <div className='movie_genres'>
    {genres.map((genre) => genre.toLowerCase()).join(', ')}
  </div>
);

MovieGenres.propTypes = {
  genres: PropTypes.array.isRequired
};

export default MovieGenres;
