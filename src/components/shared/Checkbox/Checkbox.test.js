import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import { isElementVisible } from '../../../testing/isElementVisible';
import { isElementByRoleVisible } from '../../../testing/isElementByRoleVisible';

describe('Checkbox component', () => {
  it('should render checkbox with the correct label text', () => {
    render(<Checkbox option='Accept Terms' />);
    isElementVisible('Accept Terms');
  });

  it('should render a checkbox input element', () => {
    render(<Checkbox option='Accept Terms' />);
    isElementByRoleVisible('checkbox');
  });

  it('should be unchecked by default', () => {
    render(<Checkbox option='Accept Terms' />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('should trigger onChange event when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox option='Accept Terms' onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should correctly reflect checked state when clicked', () => {
    render(<Checkbox option='Accept Terms' />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should render a disabled checkbox when disabled prop is true', () => {
    render(<Checkbox option='Accept Terms' disabled />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
  });

  it('should spread additional props to the checkbox element', () => {
    render(<Checkbox option='Accept Terms' checked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });
});
