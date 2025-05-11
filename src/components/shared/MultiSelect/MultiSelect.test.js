/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MultiSelect from './MultiSelect';
import userEvent from '@testing-library/user-event';
import { isElementVisible } from '../../../testing/isElementVisible';
import { isElementNonVisible } from '../../../testing/isElementNonVisible';
import { isElementByTestIdVisible } from '../../../testing/isElementByTestIdVisible';
import { isElementByPlaceholderVisible } from '../../../testing/isElementByPlaceholderVisible';

jest.mock('../Input/Input', () => ({ ...args }) => <input {...args} />);

jest.mock('../Checkbox/Checkbox', () => ({ value, checked, onChange, option }) => (
  <input
    type='checkbox'
    data-testid={option}
    value={value}
    checked={checked}
    onChange={onChange}
  />
));

jest.mock('../ErrorMessage/ErrorMessage', () => () => <div>Mock Error Message</div>);

jest.mock('react-icons/bi', () => ({
  BiSolidUpArrow: () => <div aria-label='up arrow' />,
  BiSolidDownArrow: () => <div aria-label='down arrow' />
}));

describe('MultiSelect Component', () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  const defaultProps = {
    label: 'Select Genres',
    placeholder: 'Select Genres',
    name: 'genres',
    options: ['Action', 'Comedy', 'Drama'],
    onChange: mockOnChange,
    onBlur: mockOnBlur,
    isValid: true,
    required: true
  };

  it('should render the MultiSelect component with label and options', () => {
    render(<MultiSelect {...defaultProps} />);

    const input = screen.getByPlaceholderText('Select Genres');
    isElementByPlaceholderVisible('Select Genres');

    userEvent.click(input);

    isElementByTestIdVisible('Action');
    isElementByTestIdVisible('Comedy');
    isElementByTestIdVisible('Drama');
  });

  it('should toggle the dropdown when the input is clicked', () => {
    render(<MultiSelect {...defaultProps} />);

    const inputField = screen.getByPlaceholderText('Select Genres');
    userEvent.click(inputField);

    isElementByTestIdVisible('Action');
    userEvent.click(inputField);
    isElementNonVisible('Action');
  });

  it('should select an option when checkbox is clicked', () => {
    render(<MultiSelect {...defaultProps} />);

    const inputField = screen.getByPlaceholderText('Select Genres');
    userEvent.click(inputField);

    fireEvent.click(screen.getByTestId('Action'));
    fireEvent.click(screen.getByTestId('Comedy'));

    expect(inputField.value).toBe('Action, Comedy');
  });

  it('should select an option when checkbox is clicked', () => {
    render(<MultiSelect {...defaultProps} />);

    const inputField = screen.getByPlaceholderText('Select Genres');
    userEvent.click(inputField);

    fireEvent.click(screen.getByTestId('Action'));
    expect(inputField.value).toBe('Action');

    fireEvent.click(screen.getByTestId('Action'));
    expect(inputField.value).toBe('');
  });

  it('should close the dropdown when clicking outside', () => {
    render(<MultiSelect {...defaultProps} />);

    const inputField = screen.getByPlaceholderText('Select Genres');
    userEvent.click(inputField);
    userEvent.click(document.body);

    isElementNonVisible('Action');
    expect(mockOnChange).toHaveBeenCalledWith({
      target: {
        name: 'genres',
        value: ''
      }
    });
  });

  it('should display the error message when invalid is true', () => {
    render(
      <MultiSelect
        {...defaultProps}
        errorMessage='This field is required'
        isValid={false}
      />
    );
    isElementVisible('Mock Error Message');
  });

  it('should not display the error message when invalid is false', () => {
    render(<MultiSelect {...defaultProps} isValid={true} />);
    isElementNonVisible('Mock Error Message');
  });
});
