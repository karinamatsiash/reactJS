import { fn } from '@storybook/test';
import { GENRES } from '../constants/Genres';
import GenreSelect from '../components/GenreSelect/GenreSelect';

export default {
  title: 'Example/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onSelect: fn(), genreList: GENRES, selectedGenre: GENRES[0] }
};

export const Default = {
  args: {}
};
