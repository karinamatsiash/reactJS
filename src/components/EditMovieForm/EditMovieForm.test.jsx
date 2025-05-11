/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { EditMovieForm } from './EditMovieForm';
import { useLoaderData, useNavigate } from 'react-router';
import { editMovie } from '../../api/editMovie';
import { renderWithRouter } from '../../testing/renderWithRouter';
import userEvent from '@testing-library/user-event';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLoaderData: jest.fn(),
  useNavigate: jest.fn()
}));

jest.mock('../../api/editMovie', () => ({
  editMovie: jest.fn()
}));

jest.mock('../MovieForm/MovieForm', () => ({ onSubmit }) => (
  <button onClick={() => onSubmit({ title: 'Edited Title' })}>Submit Form</button>
));

describe('EditMovieForm', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    useLoaderData.mockReturnValue({
      movieData: { result: { id: 1, title: 'Old Title', genres: ['Comedy', 'Drama'] } }
    });

    useNavigate.mockReturnValue(navigateMock);
    editMovie.mockResolvedValue({ isError: false });
  });

  it('submits edited movie and navigates back on success', async () => {
    renderWithRouter({ children: <EditMovieForm /> });

    userEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(editMovie).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Edited Title', id: 1 })
      );
      expect(navigateMock).toHaveBeenCalledWith({
        pathname: '/',
        search: ''
      });
    });
  });
});
