/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieSort from './MovieSort';
import { isElementVisible } from '../../testing/isElementVisible';
import userEvent from '@testing-library/user-event';

jest.mock('../shared/SortState/SortState', () => ({ sortState }) => (
  <div data-testid='sort-state'>{sortState}</div>
));

describe('MovieSort', () => {
  const mockOnSortBy = jest.fn();
  const selectedSort = { option: 'release_date', state: 'ASC' };

  it('renders sorting options correctly', () => {
    render(<MovieSort selectedSort={selectedSort} onSortBy={mockOnSortBy} />);

    ['RELEASE DATE', 'TITLE'].forEach((option) => isElementVisible(option));
  });

  it('calls onSortBy when a sorting option is clicked', () => {
    render(<MovieSort selectedSort={selectedSort} onSortBy={mockOnSortBy} />);

    const optionToClick = screen.getByText('RELEASE DATE');
    userEvent.click(optionToClick);

    expect(mockOnSortBy).toHaveBeenCalledWith('release_date');
  });

  it('applies selected class to the selected option', () => {
    render(<MovieSort selectedSort={selectedSort} onSortBy={mockOnSortBy} />);

    const selectedOption = screen.getByText('RELEASE DATE');
    expect(selectedOption).toHaveClass('selected');
  });

  it('renders SortState when option is selected', () => {
    render(<MovieSort selectedSort={selectedSort} onSortBy={mockOnSortBy} />);

    expect(screen.getByTestId('sort-state')).toHaveTextContent('ASC');
  });
});
