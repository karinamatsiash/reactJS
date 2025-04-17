import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import React from 'react';

export const renderWithRouter = ({ children, params }) =>
  render(<MemoryRouter {...params}>{children}</MemoryRouter>);
