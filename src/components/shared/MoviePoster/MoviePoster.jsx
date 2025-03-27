import React from 'react';
import PropTypes from 'prop-types';
import './MoviePoster.scss';

const MoviePoster = ({ imageUrl }) => {
  return <img src={`/assets/${imageUrl}`} alt='Movie Poster' />;
};

MoviePoster.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default MoviePoster;
