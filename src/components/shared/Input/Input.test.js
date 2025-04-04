/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import { isElementVisible } from '../../../testing/isElementVisible';
import { isElementNonVisible } from '../../../testing/isElementNonVisible';
import { isElementByRoleVisible } from '../../../testing/isElementByRoleVisible';

jest.mock('../ErrorMessage/ErrorMessage', () => () => <div>Mock Error Message</div>);

describe('Input component', () => {
  it('should render the label if the label prop is provided', () => {
    render(<Input label='Test Label' name='test' />);

    isElementVisible('Test Label');
    expect(screen.getByText('Test Label').tagName).toBe('LABEL');
  });

  it('should render an input field by default', () => {
    render(<Input name='test' />);
    isElementByRoleVisible('textbox');
  });

  it('should render a textarea if type is "textarea"', () => {
    render(<Input name='test' type='textarea' />);
    isElementByRoleVisible('textbox');
  });

  it('should apply invalid class when required and not valid', () => {
    render(<Input name='test' required={true} isValid={false} />);

    expect(screen.getByRole('textbox')).toHaveClass('invalid');
  });

  it('should not apply invalid class when required and valid', () => {
    render(<Input name='test' required={true} isValid={true} />);

    expect(screen.getByRole('textbox')).not.toHaveClass('invalid');
  });

  it('should render the error message when invalid is true', () => {
    render(
      <Input
        name='test'
        required={true}
        isValid={false}
        errorMessage='This is an error!'
      />
    );

    isElementVisible('Mock Error Message');
  });

  it('should not render the error message when invalid is false', () => {
    render(
      <Input name='test' required={true} isValid={true} errorMessage='This is an error' />
    );

    isElementNonVisible('Mock Error Message');
  });

  it('should pass the errorMessage prop to ErrorMessage component', () => {
    render(
      <Input
        name='test'
        required={true}
        isValid={false}
        errorMessage='This is an error'
      />
    );

    isElementVisible('Mock Error Message');
  });

  it('should render input with placeholder text', () => {
    render(<Input name='test' placeholder='Enter text' />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Enter text');
  });
});
