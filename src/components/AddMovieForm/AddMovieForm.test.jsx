/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router';
import { renderWithRouter } from '../../testing/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { addNewMovie } from '../../api/addNewMovie';
import AddMovieForm from './AddMovieForm';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn()
}));

jest.mock('../../api/addNewMovie', () => ({
  addNewMovie: jest.fn()
}));

jest.mock('../MovieForm/MovieForm', () => ({ onSubmit }) => (
  <button onClick={() => onSubmit({ title: 'New Title' })}>Submit Form</button>
));

describe('AddMovieForm', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(navigateMock);
    addNewMovie.mockResolvedValue({ isError: false });
  });

  it('submits added movie and navigates back on success', async () => {
    renderWithRouter({ children: <AddMovieForm /> });

    userEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(addNewMovie).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'New Title' })
      );
      expect(navigateMock).toHaveBeenCalledWith({
        pathname: '/',
        search: ''
      });
    });
  });
});
