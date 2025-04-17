/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { isElementVisible } from '../../testing/isElementVisible';
import userEvent from '@testing-library/user-event';
import { isElementNonVisible } from '../../testing/isElementNonVisible';
import { isElementByTestIdVisible } from '../../testing/isElementByTestIdVisible';
import { isElementByPlaceholderVisible } from '../../testing/isElementByPlaceholderVisible';
import MoviesTopSection from './MoviesTopSection';
import { renderWithRouter } from '../../testing/renderWithRouter';

const mockOnSearch = jest.fn();

jest.mock('../shared/Dialog/Dialog', () => ({ children, onClose }) => (
  <div data-testid='dialog'>
    Mocked Dialog
    <button onClick={onClose}>Close</button>
    {children}
  </div>
));

jest.mock('../MovieForm/MovieForm', () => ({ onSubmit }) => (
  <div data-testid='movie-form'>
    Mocked MovieForm
    <button onClick={() => onSubmit({ title: 'Mocked Movie' })}>Submit</button>
  </div>
));

jest.mock('../shared/Button/Button', () => ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
));

jest.mock(
  '../shared/Input/Input',
  () =>
    ({ value, onChange, onKeyDown, placeholder }) => (
      <input
        data-testid='input'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    )
);

describe('MoviesTopSection', () => {
  beforeEach(() => {
    renderWithRouter({ children: <MoviesTopSection onSearch={mockOnSearch} /> });
    jest.clearAllMocks();
  });

  it('renders input and search button', () => {
    isElementByPlaceholderVisible(/what do you want to watch/i);
    isElementVisible(/SEARCH/i);
  });

  it('triggers onSearch when clicking SEARCH button', () => {
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'Matrix' } });
    userEvent.click(screen.getByText(/SEARCH/i));

    expect(screen.getByRole('textbox')).toHaveAttribute('value', 'Matrix');
  });

  it('triggers onSearch when pressing Enter', () => {
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.keyDown(input, { key: 'Enter', target: { value: 'Inception' } });

    expect(screen.getByRole('textbox')).toHaveAttribute('value', 'Inception');
  });

  it('opens and submits the add movie dialog', () => {
    userEvent.click(screen.getByText(/\+ ADD MOVIE/i));

    isElementByTestIdVisible('dialog');
    isElementByTestIdVisible('movie-form');

    userEvent.click(screen.getByText('Submit'));

    isElementNonVisible('dialog');
  });
});
