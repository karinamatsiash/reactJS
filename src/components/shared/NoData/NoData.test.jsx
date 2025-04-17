import React from 'react';
import { render, screen } from '@testing-library/react';
import NoData from './NoData';

describe('NoData component', () => {
  it('renders the no data message', () => {
    render(<NoData />);
    const messageElement = screen.getByText(/No movies to display/i);
    expect(messageElement).toBeInTheDocument();
  });
});
