import { render, screen } from '@testing-library/react';
import MoviePoster from './MoviePoster';
import React from 'react';
import { isElementByRoleVisible } from '../../../testing/isElementByRoleVisible';

describe('MoviePoster', () => {
  it('renders an image with the correct source', () => {
    const imageUrl = 'sample.jpg';
    render(<MoviePoster imageUrl={imageUrl} />);

    const imgElement = screen.getByRole('img');
    isElementByRoleVisible('img');

    expect(imgElement).toHaveAttribute('src', `/assets/${imageUrl}`);
  });
});
