import { fn } from '@storybook/test';
import { DEFAULT_GENRE, GENRES } from '../constants/Genres';
import GenreSelect from '../components/GenreSelect/GenreSelect';

export default {
  title: 'Example/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onSelect: fn(), genreList: GENRES, selectedGenre: DEFAULT_GENRE }
};

export const Default = {
  args: {}
};
