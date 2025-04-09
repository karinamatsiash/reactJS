import { screen } from '@testing-library/react';

export const isElementNonVisible = (text) => {
  expect(screen.queryByText(text)).not.toBeInTheDocument();
};
