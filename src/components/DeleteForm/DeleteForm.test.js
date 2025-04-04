import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteForm from './DeleteForm';
import { isElementVisible } from '../../testing/isElementVisible';

describe('DeleteForm', () => {
  it('renders the confirmation text', () => {
    render(<DeleteForm onConfirm={jest.fn()} />);
    isElementVisible(/Are you sure you want to delete this movie/i);
  });

  it('calls onConfirm when Confirm button is clicked', () => {
    const mockOnConfirm = jest.fn();
    render(<DeleteForm onConfirm={mockOnConfirm} />);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });
});
