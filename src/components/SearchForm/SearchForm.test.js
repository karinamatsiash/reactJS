import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('SearchForm', () => {
  const onSearchMock = jest.fn();

  it('renders initial value provided in props', () => {
    render(<SearchForm initialValue={'initial text'} onSearch={onSearchMock} />);
    expect(screen.getByDisplayValue('initial text')).toBeInTheDocument();
  });

  it('renders w/o initial value in props', () => {
    render(<SearchForm onSearch={onSearchMock} />);
    expect(screen.getByRole('textbox').value).toBe('');
  });

  it('print new input value after typing and clicking Search button', () => {
    render(<SearchForm initialValue={'initial text'} onSearch={onSearchMock} />);

    userEvent.type(screen.getByRole('textbox'), ' new');
    userEvent.click(screen.getByRole('button'));

    expect(onSearchMock).toHaveBeenCalledWith('initial text new');
  });

  it('print new input value after typing and clicking Enter key button', () => {
    render(<SearchForm initialValue={'initial text'} onSearch={onSearchMock} />);

    const input = screen.getByRole('textbox');

    userEvent.type(input, ' new2');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onSearchMock).toHaveBeenCalledWith('initial text new2');
  });
});
