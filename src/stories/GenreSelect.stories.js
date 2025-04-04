import { fn } from '@storybook/test';
import GenreSelect from '../components/MoviesPanel/MovieToolbar/GenreSelect/GenreSelect';
import { GENRES } from '../constants/GenreList';

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
