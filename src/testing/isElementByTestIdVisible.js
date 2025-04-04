import { screen } from '@testing-library/dom';

export const isElementByTestIdVisible = (testId) => {
  expect(screen.getByTestId(testId)).toBeInTheDocument();
};
