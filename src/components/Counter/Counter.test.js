import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { isElementVisible } from '../../testing/isElementVisible';

describe('Counter', () => {
  it('renders initial value provided in props', () => {
    render(<Counter initialValue={10} />);
    isElementVisible(/Current value: 10/i);
  });

  it('renders w/o initial value in props', () => {
    render(<Counter />);
    isElementVisible(/Current value: 0/i);
  });

  it('decrements the displayed value on click', () => {
    render(<Counter initialValue={10} />);

    userEvent.click(screen.getByText('-'));

    isElementVisible(/Current value: 9/i);
  });

  it('increments the displayed value on click', () => {
    render(<Counter initialValue={10} />);

    userEvent.click(screen.getByText('+'));

    isElementVisible(/Current value: 11/i);
  });
});
