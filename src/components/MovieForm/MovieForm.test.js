/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';
import { isElementVisible } from '../../testing/isElementVisible';
import { isElementByPlaceholderVisible } from '../../testing/isElementByPlaceholderVisible';

const mockOnSubmit = jest.fn();

jest.mock('../shared/Button/Button', () => ({ children, ...props }) => {
  const safeProps = { ...props };
  delete safeProps.cta;
  return <button {...safeProps}>{children}</button>;
});

describe('MovieForm', () => {
  const movieData = {
    name: 'Inception',
    releaseDate: '2010-07-16',
    imageUrl: 'https://example.com/inception.jpg',
    rating: '8.8',
    duration: '148',
    genres: 'Comedy, Drama',
    description: 'A mind-bending thriller directed by Christopher Nolan'
  };

  beforeEach(() => {
    render(<MovieForm onSubmit={mockOnSubmit} movieData={movieData} />);
    jest.clearAllMocks();
  });

  it('renders form inputs and buttons', () => {
    isElementByPlaceholderVisible('Movie title');
    isElementByPlaceholderVisible('Select Genre');
    isElementVisible(/Reset/i);
    isElementVisible(/Submit/i);
  });

  it('submits form when all fields are valid', async () => {
    fireEvent.change(screen.getByPlaceholderText('Movie title'), {
      target: { value: 'Inception' }
    });
    fireEvent.change(screen.getByPlaceholderText('Select Date'), {
      target: { value: '2010-07-16' }
    });
    fireEvent.change(screen.getByPlaceholderText('https://'), {
      target: { value: 'https://example.com/inception.jpg' }
    });
    fireEvent.change(screen.getByPlaceholderText('7.8'), {
      target: { value: '8.8' }
    });
    fireEvent.change(screen.getByPlaceholderText('minutes'), {
      target: { value: '40min' }
    });
    fireEvent.change(screen.getByPlaceholderText('Movie description'), {
      target: { value: 'A mind-bending thriller directed by Christopher Nolan' }
    });

    userEvent.click(screen.getByPlaceholderText('Select Genre'));

    userEvent.click(screen.getByText('Animation'));

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'Inception',
        releaseDate: '2010-07-16',
        imageUrl: 'https://example.com/inception.jpg',
        rating: '8.8',
        duration: '40min',
        genres: 'Comedy, Drama, Animation',
        description: 'A mind-bending thriller directed by Christopher Nolan'
      });
    });
  });

  it('resets form fields when Reset is clicked', () => {
    fireEvent.change(screen.getByPlaceholderText('Movie title'), {
      target: { value: 'Inception' }
    });

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByPlaceholderText('Movie title')).toHaveValue('');
  });
});
