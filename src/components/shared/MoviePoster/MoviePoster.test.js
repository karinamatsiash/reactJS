import { fireEvent, render, screen } from '@testing-library/react';
import MoviePoster from './MoviePoster';
import React from 'react';
import { isElementByRoleVisible } from '../../../testing/isElementByRoleVisible';

describe('MoviePoster', () => {
  it('renders an image with the correct source', () => {
    const imageUrl = 'sample.jpg';
    render(<MoviePoster imageUrl={imageUrl} />);

    const imgElement = screen.getByRole('img');
    isElementByRoleVisible('img');

    expect(imgElement).toHaveAttribute('src', `${imageUrl}`);
  });

  it('replaces the image src with fallback on error', () => {
    const validImage = 'https://example.com/image.jpg';
    const fallbackImage = '/assets/no-image.png';

    render(<MoviePoster imageUrl={validImage} />);
    const img = screen.getByAltText(/movie poster/i);

    fireEvent.error(img);

    expect(img).toHaveAttribute('src', fallbackImage);
  });
});
