import { screen } from '@testing-library/react';

export const isElementVisible = (text) => {
  expect(screen.getByText(text)).toBeInTheDocument();
};
