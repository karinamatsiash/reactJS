/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieControl from './MovieControl';
import userEvent from '@testing-library/user-event';
import { isElementVisible } from '../../../../testing/isElementVisible';
import { isElementNonVisible } from '../../../../testing/isElementNonVisible';
import { isElementByRoleVisible } from '../../../../testing/isElementByRoleVisible';

jest.mock('../../../MovieForm/MovieForm', () => () => <div>Movie Form</div>);

jest.mock('../../../shared/Dialog/Dialog', () => ({ children, title, onClose }) => (
  <div>
    {title && <h2>{title}</h2>}
    <button onClick={onClose}>Close dialog</button>
    {children}
  </div>
));

jest.mock('../../../DeleteForm/DeleteForm', () => ({ onConfirm }) => (
  <div>
    <button>Close delete form</button>
    Delete Form
    <button onClick={onConfirm}>Confirm</button>
  </div>
));

jest.mock('react-icons/bs', () => ({
  BsThreeDotsVertical: () => <button>...</button>
}));

jest.mock('react-icons/io5', () => ({
  IoCloseOutline: ({ onClick }) => <button onClick={onClick}>Close control</button>
}));

describe('MovieControl', () => {
  const mockMovieData = { title: 'Inception', year: 2010 };

  beforeEach(() => {
    render(<MovieControl movieData={mockMovieData} />);
  });

  it('should render MovieControl button', () => {
    isElementByRoleVisible('button');
  });

  it('should show options when control button is clicked', () => {
    const controlButton = screen.getByRole('button');

    userEvent.click(controlButton);

    isElementVisible(/Edit/);
    isElementVisible(/Delete/);
  });

  it('should show edit dialog when "Edit" is clicked', async () => {
    const controlButton = screen.getByRole('button');

    userEvent.click(controlButton);
    isElementVisible(/Edit/);
    userEvent.click(screen.getByText(/Edit/));

    isElementVisible(/EDIT MOVIE/);
    isElementVisible(/Movie Form/);
  });

  it('should show delete dialog when "Delete" is clicked', () => {
    const controlButton = screen.getByRole('button');

    userEvent.click(controlButton);
    userEvent.click(screen.getByText(/Delete/));

    isElementVisible(/DELETE MOVIE/);
    isElementVisible(/Delete Form/);
  });

  it('should close control when close button is clicked', () => {
    const controlButton = screen.getByRole('button');

    userEvent.click(controlButton);

    isElementVisible(/Edit/);
    isElementVisible(/Delete/);

    userEvent.click(screen.getByText(/Close control/));

    isElementNonVisible(/Edit/);
    isElementNonVisible(/Delete/);
  });

  it('should close edit dialog when close button is clicked', () => {
    const controlButton = screen.getByRole('button');

    userEvent.click(controlButton);
    userEvent.click(screen.getByText(/Edit/));

    isElementVisible(/EDIT MOVIE/);

    userEvent.click(screen.getByText(/Close dialog/));

    isElementNonVisible(/EDIT MOVIE/);
  });

  it('should close delete dialog when close button is clicked', () => {
    const controlButton = screen.getByText('...');

    userEvent.click(controlButton);
    userEvent.click(screen.getByText(/Delete/));

    isElementVisible(/DELETE MOVIE/);
    isElementVisible(/Delete Form/);

    userEvent.click(screen.getByText(/Close dialog/));

    isElementNonVisible(/Delete Form/);
  });

  it('should close delete dialog when confirm button is clicked', () => {
    const controlButton = screen.getByText('...');

    userEvent.click(controlButton);
    userEvent.click(screen.getByText(/Delete/));

    isElementVisible(/DELETE MOVIE/);
    isElementVisible(/Delete Form/);

    userEvent.click(screen.getByText(/Confirm/));

    isElementNonVisible(/Delete Form/);
  });
});
