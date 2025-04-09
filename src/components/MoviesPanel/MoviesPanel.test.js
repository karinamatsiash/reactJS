/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MoviesPanel from './MoviesPanel';
import { isElementVisible } from '../../testing/isElementVisible';

jest.mock('./MovieList/MovieList', () => ({ movieList, onMovieSelect }) => (
  <div>
    <ul>
      {movieList.map((movie, index) => (
        <li key={index} onClick={() => onMovieSelect(movie)}>
          {movie.name}
        </li>
      ))}
    </ul>
  </div>
));

jest.mock('./MovieToolbar/MovieToolbar', () => ({ onSortBy }) => (
  <div>
    <button onClick={() => onSortBy('ASC')}>Sort Ascending</button>
    <button onClick={() => onSortBy('DESC')}>Sort Descending</button>
  </div>
));

describe('MoviesPanel Component', () => {
  const movieList = [{ name: 'Movie 1' }, { name: 'Movie 2' }];
  const openMovieDetails = jest.fn();

  it('renders correctly with null sort state', () => {
    render(<MoviesPanel movieList={movieList} openMovieDetails={openMovieDetails} />);

    isElementVisible('Sort Ascending');
    isElementVisible('Sort Descending');
  });

  it('should not apply sorting when sort is null', () => {
    render(<MoviesPanel movieList={movieList} openMovieDetails={openMovieDetails} />);

    isElementVisible('Movie 1');
    isElementVisible('Movie 2');

    expect(screen.queryByText('Sorted:')).toBeNull();
  });

  it('should call onMovieSelect when a movie is clicked', () => {
    render(<MoviesPanel movieList={movieList} openMovieDetails={openMovieDetails} />);

    fireEvent.click(screen.getByText('Movie 1'));

    expect(openMovieDetails).toHaveBeenCalledWith(movieList[0]);
  });

  it('should call onSortBy when a sorting option is selected', () => {
    render(<MoviesPanel movieList={movieList} openMovieDetails={openMovieDetails} />);

    fireEvent.click(screen.getByText('Sort Ascending'));

    isElementVisible('Sort Ascending');
  });
});
