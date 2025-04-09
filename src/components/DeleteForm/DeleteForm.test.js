/* eslint-disable react/display-name */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteForm from './DeleteForm';
import { isElementVisible } from '../../testing/isElementVisible';

jest.mock('../shared/ErrorMessage/ErrorMessage', () => () => (
  <div>Mock Error Message</div>
));

describe('DeleteForm', () => {
  const mockOnConfirm = jest.fn();

  it('renders the confirmation text', () => {
    render(<DeleteForm onConfirm={jest.fn()} />);
    isElementVisible(/Are you sure you want to delete this movie/i);
  });

  it('calls onConfirm when Confirm button is clicked', () => {
    render(<DeleteForm onConfirm={mockOnConfirm} />);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('show error message on error', () => {
    render(<DeleteForm onConfirm={mockOnConfirm} isError={true} />);
    isElementVisible('Mock Error Message');
  });
});
