import { render, screen } from '@testing-library/react';
import MoviePoster from './MoviePoster';
import React from 'react';

describe('MoviePoster', () => {
  it('renders an image with the correct source', () => {
    const imageUrl = 'sample.jpg';
    render(<MoviePoster imageUrl={imageUrl} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', `/assets/${imageUrl}`);
  });
});
