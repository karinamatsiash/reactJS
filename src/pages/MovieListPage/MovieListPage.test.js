/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import MovieListPage from './MovieListPage';
import * as fetchApi from '../../api/fetchMovieList';
import { isElementVisible } from '../../testing/isElementVisible';
import { isElementByTestIdVisible } from '../../testing/isElementByTestIdVisible';
import { renderWithRouter } from '../../testing/renderWithRouter';

jest.mock('../../components/MovieDetails/MovieDetails', () => () => (
  <div data-testid='movie-details' />
));
jest.mock('../../components/MoviesTopSection/MoviesTopSection', () => ({ onSearch }) => (
  <input
    data-testid='search-form'
    placeholder='Search'
    onChange={(e) => onSearch(e.target.value)}
  />
));
jest.mock(
  '../../components/MovieToolbar/MovieToolbar',
  () =>
    ({ onGenreSelect, onSortBy }) => (
      <div>
        <button data-testid='genre-button' onClick={() => onGenreSelect('Drama')}>
          Drama
        </button>
        <button data-testid='sort-button' onClick={() => onSortBy('release_date')}>
          RELEASE DATE
        </button>
      </div>
    )
);
jest.mock(
  '../../components/MovieList/MovieList',
  () =>
    ({ movieList, onMovieSelect }) => (
      <div>
        {movieList.map((m) => (
          <div key={m.id} onClick={() => onMovieSelect(m.id)}>
            {m.name}
          </div>
        ))}
      </div>
    )
);

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  Outlet: () => <div data-testid='outlet' />
}));

describe('MovieListPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially and fetches movie list', async () => {
    const mockData = {
      result: {
        data: [
          {
            id: 1,
            title: 'Test Movie',
            poster_path: 'poster.jpg',
            release_date: '2023-01-01',
            genres: ['Action'],
            vote_average: 8,
            runtime: 120,
            overview: 'Description'
          }
        ]
      },
      isError: false
    };

    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValueOnce(mockData);

    renderWithRouter({
      children: <MovieListPage />
    });

    await waitFor(() => {
      isElementVisible(/Test Movie/i);
    });
  });

  it('handles genre and sort selection', async () => {
    const mockData = {
      result: { data: [] },
      isError: false
    };

    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValue(mockData); // fixes the bug

    renderWithRouter({
      children: <MovieListPage />
    });

    fireEvent.click(screen.getByTestId('genre-button'));
    fireEvent.click(screen.getByTestId('sort-button'));

    await waitFor(() => {
      expect(fetchApi.fetchMovieList).toHaveBeenCalledTimes(3);
    });
  });

  it('opens correct outet', async () => {
    const mockData = {
      result: { data: [] },
      isError: false
    };
    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValue(mockData);

    renderWithRouter({
      children: <MovieListPage />
    });

    isElementByTestIdVisible('outlet');
  });
});
