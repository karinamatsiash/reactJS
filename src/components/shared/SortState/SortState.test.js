import React from 'react';
import { render, screen } from '@testing-library/react';
import SortState from './SortState';

jest.mock('react-icons/bi', () => ({
  BiSolidUpArrow: () => <div aria-label='up arrow' />,
  BiSolidDownArrow: () => <div aria-label='down arrow' />
}));

describe('SortState', () => {
  it('renders up arrow when sortState is ASC', () => {
    render(<SortState sortState='ASC' />);

    const upArrow = screen.getByLabelText('up arrow');
    expect(upArrow).toBeInTheDocument();
  });

  it('renders down arrow when sortState is DESC', () => {
    render(<SortState sortState='DESC' />);

    const downArrow = screen.getByLabelText('down arrow');
    expect(downArrow).toBeInTheDocument();
  });

  it('renders nothing when sortState is falsy', () => {
    const { container } = render(<SortState sortState={null} />);

    expect(container.firstChild).toBeNull();
  });
});
