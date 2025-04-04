/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import MovieList from './MovieList';
import React from 'react';
import { isElementVisible } from '../../../testing/isElementVisible';
import { isElementNonVisible } from '../../../testing/isElementNonVisible';

jest.mock('./MovieItem/MovieItem', () => ({ movieData }) => <div>{movieData.name}</div>);

describe('MovieList Component', () => {
  const mockOnMovieSelect = jest.fn();
  const movies = [
    {
      id: '1',
      name: 'Inception',
      imageUrl: 'inception.jpg',
      releaseYear: '2010',
      genres: ['Sci-Fi']
    },
    {
      id: '2',
      name: 'Titanic',
      imageUrl: 'titanic.jpg',
      releaseYear: '1997',
      genres: ['Romance', 'Drama']
    }
  ];

  it('renders a list of movies correctly', () => {
    render(<MovieList movieList={movies} onMovieSelect={mockOnMovieSelect} />);

    isElementVisible('Inception');
    isElementVisible('Titanic');
  });

  it('renders correctly when movieList is empty', () => {
    render(<MovieList movieList={[]} onMovieSelect={mockOnMovieSelect} />);

    isElementNonVisible('Inception');
    isElementNonVisible('Titanic');
  });
});
