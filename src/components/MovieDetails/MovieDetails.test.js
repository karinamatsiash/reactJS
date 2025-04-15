import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { isElementVisible } from '../../testing/isElementVisible';
import { useLoaderData, MemoryRouter } from 'react-router-dom';

const mockMovieData = {
  result: {
    title: 'The Dark Knight',
    vote_average: 9.0,
    poster_path: 'poster.jpg',
    release_date: '2008-07-18',
    runtime: 152,
    genres: ['Action', 'Drama'],
    overview: 'A gritty crime thriller in Gotham.'
  }
};

describe('MovieDetails', () => {
  beforeEach(() => {
    useLoaderData.mockReturnValue(mockMovieData);
  });

  it('renders the MovieDetails component correctly', () => {
    render(
      <MemoryRouter initialEntries={['/?search=abc']}>
        <MovieDetails />
      </MemoryRouter>
    );

    isElementVisible('Test Movie');
    isElementVisible('8.5');
    isElementVisible('2014');
    isElementVisible('120 min');
    isElementVisible('A test description for the test movie.');
    isElementVisible('Action, Adventure');

    expect(screen.getByRole('link')).toHaveAttribute('href', '/?search=abc');
  });
});
