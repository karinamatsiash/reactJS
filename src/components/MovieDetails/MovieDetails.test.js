import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

const mockMovieData = {
  imageUrl: 'https://via.placeholder.com/150',
  name: 'Test Movie',
  rating: '8.5',
  releaseYear: 2021,
  duration: '120 min',
  genres: ['Action', 'Adventure'],
  description: 'A test description for the test movie.'
};

const mockOnSearchClick = jest.fn();

describe('MovieDetails', () => {
  it('renders the MovieDetails component correctly', () => {
    render(<MovieDetails movieData={mockMovieData} onSearchClick={mockOnSearchClick} />);

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('120 min')).toBeInTheDocument();
    expect(
      screen.getByText('A test description for the test movie.')
    ).toBeInTheDocument();
    expect(screen.getByText('action, adventure')).toBeInTheDocument();
  });
});
