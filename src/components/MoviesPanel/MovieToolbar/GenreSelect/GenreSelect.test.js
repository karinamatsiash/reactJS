import { render, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import React from 'react';
import { GENRES } from '../../../../constants/genreList';
import userEvent from '@testing-library/user-event';

describe('GenreSelect', () => {
  const onSelectMock = jest.fn();

  beforeEach(() => {
    render(<GenreSelect genreList={GENRES} selectedGenre={GENRES[0]} onSelect={onSelectMock} />);
  });

  it('renders all genres passed in props', () => {
    GENRES.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  describe('correctly highlights', () => {
    it('selected genre', () => {
      expect(screen.getByText(GENRES[0])).toHaveClass('selected');
    });

    it('non-selected genre', () => {
      expect(screen.getByText(GENRES[1])).not.toHaveClass('selected');
    });
  });

  it('call onSelect after clicking on genre', () => {
    userEvent.click(screen.getByText(GENRES[1]));
    expect(onSelectMock).toHaveBeenCalledWith(GENRES[1]);
  });

  it('does not call onSelect after clicking outside genre', () => {
    userEvent.click(screen.getByRole('list'));
    expect(onSelectMock).not.toHaveBeenCalled();
  });
});
