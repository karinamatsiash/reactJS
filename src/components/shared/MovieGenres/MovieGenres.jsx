import React from 'react';
import './MovieGenres.scss';

const MovieGenres = ({ genres }) => (
  <div className='movie_genres'>{genres.map((genre) => genre.toLowerCase()).join(', ')}</div>
);

export default MovieGenres;
