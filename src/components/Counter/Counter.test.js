import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('Counter', () => {
  it('renders initial value provided in props', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText(/Current value: 10/i)).toBeInTheDocument();
  });

  it('renders w/o initial value in props', () => {
    render(<Counter />);
    expect(screen.getByText(/Current value: 0/i)).toBeInTheDocument();
  });

  it('decrements the displayed value on click', () => {
    render(<Counter initialValue={10} />);

    userEvent.click(screen.getByText('-'));

    expect(screen.getByText(/Current value: 9/i)).toBeInTheDocument();
  });

  it('increments the displayed value on click', () => {
    render(<Counter initialValue={10} />);

    userEvent.click(screen.getByText('+'));

    expect(screen.getByText(/Current value: 11/i)).toBeInTheDocument();
  });
});
