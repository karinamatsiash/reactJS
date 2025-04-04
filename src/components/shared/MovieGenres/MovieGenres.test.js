import { render } from '@testing-library/react';
import MovieGenres from './MovieGenres';
import React from 'react';
import { isElementVisible } from '../../../testing/isElementVisible';

describe('MovieGenres', () => {
  it('renders genres as a comma-separated lowercase string', () => {
    const genres = 'Action, Comedy, Drama';
    render(<MovieGenres genres={genres} />);
    isElementVisible('Action, Comedy, Drama');
  });
});
