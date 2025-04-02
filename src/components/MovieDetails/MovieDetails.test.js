import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { isElementVisible } from '../../testing/isElementVisible';

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

    isElementVisible('Test Movie');
    isElementVisible('8.5');
    isElementVisible('2021');
    isElementVisible('120 min');
    isElementVisible('A test description for the test movie.');
    isElementVisible('action, adventure');
  });
});
