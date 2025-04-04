/* eslint-disable react/no-children-prop */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { isElementVisible } from '../../../testing/isElementVisible';

describe('Button component', () => {
  it('should render the button with the correct text', () => {
    render(<Button children='Click' />);

    isElementVisible('Click');
  });

  it('should add "cta" class when cta prop is true', () => {
    render(<Button cta={true} children='Click' />);

    const button = screen.getByText('Click');
    expect(button).toHaveClass('cta');
  });

  it('should add "transparent" class when transparent prop is true', () => {
    render(<Button transparent={true} children='Click' />);

    const button = screen.getByText('Click');
    expect(button).toHaveClass('transparent');
  });

  it('should not have "cta" class if cta prop is false', () => {
    render(<Button cta={false} children='Click' />);

    const button = screen.getByText('Click');
    expect(button).not.toHaveClass('cta');
  });

  it('should render a button with multiple classes when both props are true', () => {
    render(<Button cta={true} transparent={true} children='Click' />);

    const button = screen.getByText('Click');
    expect(button).toHaveClass('cta');
    expect(button).toHaveClass('transparent');
  });

  it('should spread additional props to the button', () => {
    render(<Button cta={true} children='Click' disabled />);

    const button = screen.getByText('Click');
    expect(button).toBeDisabled();
  });
});
