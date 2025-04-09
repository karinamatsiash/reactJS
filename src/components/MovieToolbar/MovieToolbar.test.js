/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieToolbar from './MovieToolbar';
import { isElementByTestIdVisible } from '../../testing/isElementByTestIdVisible';

jest.mock('../GenreSelect/GenreSelect', () => ({ selectedGenre, onSelect }) => (
  <div data-testid='genre-select' onClick={() => onSelect('Action')}>
    Selected Genre: {selectedGenre}
  </div>
));

jest.mock('../MovieSort/MovieSort', () => ({ selectedSort, onSortBy }) => (
  <div data-testid='movie-sort' onClick={() => onSortBy('RELEASE DATE')}>
    Selected Sort: {selectedSort?.option || 'None'}
  </div>
));

describe('MovieToolbar Component', () => {
  const mockOnSortBy = jest.fn();
  const mockOnGenreSelect = jest.fn();
  const genreList = ['Action', 'Comedy', 'Drama'];
  const selectedSort = { option: 'RELEASE DATE', state: 'ASC' };
  const selectedGenre = 'Action';

  it('renders GenreSelect and MovieSort components', () => {
    render(
      <MovieToolbar
        selectedSort={selectedSort}
        selectedGenre={selectedGenre}
        onSortBy={mockOnSortBy}
        genreList={genreList}
        onGenreSelect={mockOnGenreSelect}
      />
    );

    isElementByTestIdVisible('genre-select');
    isElementByTestIdVisible('movie-sort');
  });

  it('passes correct props to GenreSelect', () => {
    render(
      <MovieToolbar
        selectedSort={selectedSort}
        selectedGenre={selectedGenre}
        onSortBy={mockOnSortBy}
        genreList={genreList}
        onGenreSelect={mockOnGenreSelect}
      />
    );

    expect(screen.getByTestId('genre-select')).toHaveTextContent(
      'Selected Genre: Action'
    );
  });

  it('passes correct props to MovieSort', () => {
    render(
      <MovieToolbar
        selectedSort={selectedSort}
        selectedGenre={selectedGenre}
        onSortBy={mockOnSortBy}
        genreList={genreList}
        onGenreSelect={mockOnGenreSelect}
      />
    );

    expect(screen.getByTestId('movie-sort')).toHaveTextContent(
      'Selected Sort: RELEASE DATE'
    );
  });

  it('calls onSortBy when sorting option is clicked', () => {
    render(
      <MovieToolbar
        selectedSort={selectedSort}
        selectedGenre={selectedGenre}
        onSortBy={mockOnSortBy}
        genreList={genreList}
        onGenreSelect={mockOnGenreSelect}
      />
    );

    screen.getByTestId('movie-sort').click();
    expect(mockOnSortBy).toHaveBeenCalledWith('RELEASE DATE');
  });

  it('calls onGenreSelect when genre is selected', () => {
    render(
      <MovieToolbar
        selectedSort={selectedSort}
        selectedGenre={selectedGenre}
        onSortBy={mockOnSortBy}
        genreList={genreList}
        onGenreSelect={mockOnGenreSelect}
      />
    );

    screen.getByTestId('genre-select').click();
    expect(mockOnGenreSelect).toHaveBeenCalledWith('Action');
  });
});
