import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  it('renders loading text', () => {
    render(<Loader />);
    const loaderText = screen.getByText(/is loading.../i);
    expect(loaderText).toBeInTheDocument();
  });
});
