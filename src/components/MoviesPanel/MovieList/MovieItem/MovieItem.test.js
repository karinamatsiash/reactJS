/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import MovieItem from './MovieItem';
import React from 'react';

jest.mock('../../../shared/MoviePoster/MoviePoster', () => () => (
  <img src='mocked-image.jpg' alt='Movie Poster' />
));

jest.mock('../../../shared/MovieGenres/MovieGenres', () => ({ genres }) => (
  <div>{genres.join(', ')}</div>
));

describe('MovieItem Component', () => {
  const movieData = {
    imageUrl: 'sample.jpg',
    name: 'Interstellar',
    releaseYear: '2014',
    genres: ['Sci-Fi', 'Drama']
  };

  it('renders movie name, year, and genres correctly', () => {
    render(<MovieItem movieData={movieData} />);

    expect(screen.getByText('Interstellar')).toBeInTheDocument();
    expect(screen.getByText('2014')).toBeInTheDocument();
    expect(screen.getByText('Sci-Fi, Drama')).toBeInTheDocument();
  });

  it('renders the movie poster with correct image source', () => {
    render(<MovieItem movieData={movieData} />);

    const poster = screen.getByAltText('Movie Poster');
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', 'mocked-image.jpg');
  });
});
