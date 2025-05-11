/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';
import GeneralLoader from './GeneralLoader';

describe('Loader component', () => {
  it('renders loading', () => {
    render(<GeneralLoader />);
    const loaderText = screen.getByText(/Loading.../i);
    expect(loaderText).toBeInTheDocument();
  });
});
