import { render, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import React from 'react';
import { GENRES } from '../../constants/GenreList';
import userEvent from '@testing-library/user-event';
import { isElementVisible } from '../../testing/isElementVisible';
import { DEFAULT_GENRE } from '../../constants/Genres';

describe('GenreSelect', () => {
  const onSelectMock = jest.fn();

  beforeEach(() => {
    render(
      <GenreSelect
        genreList={GENRES}
        selectedGenre={DEFAULT_GENRE}
        onSelect={onSelectMock}
      />
    );
  });

  it('renders all genres passed in props', () => {
    GENRES.forEach((genre) => {
      isElementVisible(genre);
    });
  });

  describe('correctly highlights', () => {
    it('selected genre', () => {
      expect(screen.getByText(DEFAULT_GENRE)).toHaveClass('selected');
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
