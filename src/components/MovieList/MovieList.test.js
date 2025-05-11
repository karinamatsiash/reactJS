/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { screen } from '@testing-library/react';
import MovieList from './MovieList';
import React from 'react';
import { isElementVisible } from '../../testing/isElementVisible';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../testing/renderWithRouter';
import { useNavigate } from 'react-router';

jest.mock('../MovieItem/MovieItem', () => ({ movieData, onClick }) => (
  <div onClick={onClick}>{movieData.name}</div>
));
jest.mock('../shared/ErrorMessage/ErrorMessage', () => () => (
  <div>Mocked error message</div>
));
jest.mock('../shared/NoData/NoData', () => () => <div>Mocked no data</div>);
jest.mock('../shared/GeneralLoader/GeneralLoader', () => () => <div>Mocked loader</div>);

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn()
}));

describe('MovieList Component', () => {
  const movies = [
    {
      id: '1',
      name: 'Inception',
      imageUrl: 'inception.jpg',
      releaseDate: '2010',
      genres: ['Sci-Fi']
    },
    {
      id: '2',
      name: 'Titanic',
      imageUrl: 'titanic.jpg',
      releaseDate: '1997',
      genres: ['Romance', 'Drama']
    }
  ];
  const mockNavigate = jest.fn();

  beforeEach(() => {
    window.scrollTo = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);
  });

  it('renders a list of movies correctly', () => {
    renderWithRouter({
      children: <MovieList movieList={movies} />
    });

    isElementVisible('Inception');
    isElementVisible('Titanic');
  });

  it('renders correctly when movieList is empty', () => {
    renderWithRouter({
      children: <MovieList movieList={[]} />
    });
    isElementVisible('Mocked no data');
  });

  it('renders Loader on loading', () => {
    renderWithRouter({
      children: <MovieList movieList={[]} isLoading={true} />
    });

    isElementVisible('Mocked loader');
  });

  it('renders Error message on error', () => {
    renderWithRouter({
      children: <MovieList movieList={[]} isLoading={false} isError={true} />
    });
    isElementVisible('Mocked error message');
  });

  it('navigate to correct page on movie click', () => {
    renderWithRouter({
      children: <MovieList movieList={movies} />,
      params: { initialEntries: ['/?search=abc'] }
    });

    const item = screen.getByText('Inception');
    userEvent.click(item);

    expect(mockNavigate).toHaveBeenCalledWith({
      pathname: '/1',
      search: 'search=abc'
    });
  });
});
