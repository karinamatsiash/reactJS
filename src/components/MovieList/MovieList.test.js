/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import React from 'react';
import { isElementVisible } from '../../testing/isElementVisible';
import userEvent from '@testing-library/user-event';

jest.mock('../MovieItem/MovieItem', () => ({ movieData }) => <div>{movieData.name}</div>);
jest.mock('../shared/ErrorMessage/ErrorMessage', () => () => (
  <div>Mocked error message</div>
));
jest.mock('../shared/NoData/NoData', () => () => <div>Mocked no data</div>);
jest.mock('../shared/Loader/Loader', () => () => <div>Mocked loader</div>);

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

    isElementVisible('Mocked no data');
  });

  it('renders Loader on loading', () => {
    render(
      <MovieList movieList={[]} isLoading={true} onMovieSelect={mockOnMovieSelect} />
    );

    isElementVisible('Mocked loader');
  });

  it('renders Error message on error', () => {
    render(
      <MovieList
        movieList={[]}
        isLoading={false}
        isError={true}
        onMovieSelect={mockOnMovieSelect}
      />
    );

    isElementVisible('Mocked error message');
  });

  it('renders call onMovieSelect on movie click', () => {
    render(<MovieList movieList={movies} onMovieSelect={mockOnMovieSelect} />);

    const item = screen.getAllByRole('listitem')[0];
    userEvent.click(item);

    expect(mockOnMovieSelect).toHaveBeenCalledWith(1);
  });
});
