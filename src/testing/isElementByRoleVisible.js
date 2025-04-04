import { screen } from '@testing-library/dom';

export const isElementByRoleVisible = (role) => {
  expect(screen.getByRole(role)).toBeInTheDocument();
};
