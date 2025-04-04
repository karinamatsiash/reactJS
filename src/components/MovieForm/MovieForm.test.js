/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';
import { isElementVisible } from '../../testing/isElementVisible';
import { isElementByTestIdVisible } from '../../testing/isElementByTestIdVisible';

const mockOnSubmit = jest.fn();

jest.mock(
  '../shared/Input/Input',
  () =>
    ({ name = 'mockInput', onChange, onBlur, defaultValue = '', ...rest }) => {
      const safeProps = { ...rest };
      delete safeProps.isValid;
      delete safeProps.errorMessage;

      return (
        <input
          name={name}
          data-testid={`input-${name}`}
          defaultValue={defaultValue}
          onChange={(e) => onChange({ name, value: e.target.value })}
          onBlur={() => onBlur({ target: { name } })}
          {...safeProps}
        />
      );
    }
);

jest.mock(
  '../shared/MultiSelect/MultiSelect',
  () =>
    ({ name = 'genres', onChange, onBlur }) => {
      return (
        <select
          data-testid='multi-select'
          name={name}
          multiple
          onChange={(e) => {
            const values = Array.from(e.target.options)
              .filter((opt) => opt.selected)
              .map((opt) => opt.value);
            onChange({ name, value: values });
          }}
          onBlur={(e) => onBlur({ target: { name: e.target.name } })}
        >
          <option value='Action'>Action</option>
          <option value='Drama'>Drama</option>
        </select>
      );
    }
);

jest.mock('../shared/Button/Button', () => ({ children, ...props }) => {
  const safeProps = { ...props };
  delete safeProps.cta;
  return <button {...safeProps}>{children}</button>;
});

describe('MovieForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form inputs and buttons', () => {
    render(<MovieForm onSubmit={mockOnSubmit} />);
    isElementByTestIdVisible('input-name');
    isElementByTestIdVisible('multi-select');
    isElementVisible(/Reset/i);
    isElementVisible(/Submit/i);
  });

  it('submits form when all fields are valid', () => {
    render(<MovieForm onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByTestId('input-name'), {
      target: { value: 'Inception' }
    });
    fireEvent.change(screen.getByTestId('input-releaseYear'), {
      target: { value: '2010-07-16' }
    });
    fireEvent.change(screen.getByTestId('input-imageUrl'), {
      target: { value: 'https://example.com/inception.jpg' }
    });
    fireEvent.change(screen.getByTestId('input-rating'), { target: { value: '8.8' } });
    fireEvent.change(screen.getByTestId('input-duration'), { target: { value: '148' } });
    fireEvent.change(screen.getByTestId('input-description'), {
      target: { value: 'A mind-bending thriller directed by Christopher Nolan' }
    });

    userEvent.click(screen.getByTestId('multi-select').options[0]);
    userEvent.click(screen.getByTestId('multi-select').options[1]);

    userEvent.click(screen.getByText('Submit'));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'Inception',
      releaseYear: '2010-07-16',
      imageUrl: 'https://example.com/inception.jpg',
      rating: '8.8',
      duration: '148',
      description: 'A mind-bending thriller directed by Christopher Nolan'
    });
  });
});
