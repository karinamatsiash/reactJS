import { render, screen } from '@testing-library/react';
import MovieGenres from './MovieGenres';
import React from 'react';

describe('MovieGenres', () => {
  it('renders genres as a comma-separated lowercase string', () => {
    const genres = ['Action', 'Comedy', 'Drama'];
    render(<MovieGenres genres={genres} />);

    const genresElement = screen.getByText('action, comedy, drama');
    expect(genresElement).toBeInTheDocument();
  });
});
