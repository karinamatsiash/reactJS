/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';
import { isElementVisible } from '../../../testing/isElementVisible';

jest.mock('react-icons/io5', () => ({
  IoCloseOutline: ({ onClick }) => <button onClick={onClick}>Close</button>
}));

jest.mock('react-portal', () => ({
  Portal: ({ children }) => children
}));

describe('Dialog', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(
      <Dialog title='Test Dialog' onClose={mockOnClose}>
        <div>Test Content</div>
      </Dialog>
    );
  });

  it('should render the dialog with given title and children', () => {
    isElementVisible('Test Dialog');
    isElementVisible('Test Content');
  });

  it('should trigger onClose function when close button is clicked', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render dialog inside the body using Portal', () => {
    expect(document.body.contains(screen.getByText('Test Dialog'))).toBe(true);
  });
});
