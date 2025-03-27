import React from 'react';
import './MoviePoster.scss';
import PropTypes from 'prop-types';

const MoviePoster = ({ imageUrl }) => {
  const src = require(`../../../assets/${imageUrl}`);
  return <img src={src} />;
};

MoviePoster.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default MoviePoster;
