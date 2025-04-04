import { screen } from '@testing-library/dom';

export const isElementByPlaceholderVisible = (placeholder) => {
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
};
