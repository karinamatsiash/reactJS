import React from 'react';
import PropTypes from 'prop-types';
import './MoviePoster.scss';

const MoviePoster = ({ imageUrl }) => {
  const onError = ({ target }) => (target.src = '/assets/no-image.png');
  return <img src={imageUrl} onError={onError} alt='Movie Poster' />;
};

MoviePoster.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default MoviePoster;
