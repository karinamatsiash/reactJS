import React from 'react';
import { screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { isElementVisible } from '../../testing/isElementVisible';
import { renderWithRouter } from '../../testing/renderWithRouter';

const mockMovieData = {
  movieData: {
    result: {
      title: 'The Dark Knight',
      vote_average: 9.0,
      poster_path: 'poster.jpg',
      release_date: '2008-07-18',
      runtime: 152,
      genres: ['Action', 'Drama'],
      overview: 'A gritty crime thriller in Gotham.'
    }
  }
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLoaderData: () => mockMovieData
}));

describe('MovieDetails', () => {
  it('renders the MovieDetails component correctly', () => {
    renderWithRouter({
      children: <MovieDetails />,
      params: { initialEntries: ['/?search=abc'] }
    });

    isElementVisible('The Dark Knight');
    isElementVisible('9');
    isElementVisible('2008');
    isElementVisible('2h 32min');
    isElementVisible('A gritty crime thriller in Gotham.');
    isElementVisible('Action, Drama');

    expect(screen.getByRole('link')).toHaveAttribute('href', '/?search=abc');
  });
});
