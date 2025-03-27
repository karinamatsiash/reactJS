import React from 'react';
import './MoviePoster.scss';

const MoviePoster = ({ imageUrl }) => {
  const src = require(`../../../assets/${imageUrl}`);
  return <img src={src} />;
};

export default MoviePoster;
