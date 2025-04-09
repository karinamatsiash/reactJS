/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MovieListPage from './MovieListPage';
import * as fetchApi from '../../api/fetchMovieList';
import { isElementVisible } from '../../testing/isElementVisible';
import { isElementByTestIdVisible } from '../../testing/isElementByTestIdVisible';

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

    render(<MovieListPage />);

    await waitFor(() => {
      isElementVisible(/Test Movie/i);
    });
  });

  it('handles search input change', async () => {
    const mockData = {
      result: { data: [] },
      isError: false
    };

    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValue(mockData);

    render(<MovieListPage />);

    const searchInput = screen.getByTestId('search-form');
    fireEvent.change(searchInput, { target: { value: 'Batman' } });

    await waitFor(() => {
      expect(fetchApi.fetchMovieList).toHaveBeenCalled();
    });
  });

  it('handles genre and sort selection', async () => {
    const mockData = {
      result: { data: [] },
      isError: false
    };

    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValue(mockData);

    render(<MovieListPage />);

    fireEvent.click(screen.getByTestId('genre-button'));
    fireEvent.click(screen.getByTestId('sort-button'));

    await waitFor(() => {
      expect(fetchApi.fetchMovieList).toHaveBeenCalledTimes(3);
    });
  });

  it('opens movie details and scrolls to top on movie click', async () => {
    const mockData = {
      result: {
        data: [
          {
            id: 42,
            title: 'Interstellar',
            poster_path: 'interstellar.jpg',
            release_date: '2014-11-07',
            genres: ['Sci-Fi'],
            vote_average: 9,
            runtime: 169,
            overview: 'A team travels through a wormhole.'
          }
        ]
      },
      isError: false
    };

    jest.spyOn(fetchApi, 'fetchMovieList').mockResolvedValue(mockData);
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    render(<MovieListPage />);

    await waitFor(() => {
      isElementVisible('Interstellar');
    });

    fireEvent.click(screen.getByText('Interstellar'));

    isElementByTestIdVisible('movie-details');
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
