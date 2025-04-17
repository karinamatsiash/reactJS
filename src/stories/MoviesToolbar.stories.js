import { fn } from '@storybook/test';
import { GENRES } from '../constants/Genres';
import MovieToolbar from '../components/MovieToolbar/MovieToolbar';

const defaultArgs = {
  onSortBy: fn(),
  onGenreSelect: fn(),
  selectedSort: null,
  selectedGenre: GENRES[1],
  genreList: GENRES
};

export default {
  title: 'Example/MovieToolbar',
  component: MovieToolbar,
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const WithSelectedTitleSortAsc = {
  args: {
    ...defaultArgs,
    selectedSort: { option: 'TITLE', state: 'ASC' }
  }
};

export const WithSelectedTitleSortDesc = {
  args: {
    ...defaultArgs,
    selectedSort: { option: 'TITLE', state: 'DESC' }
  }
};

export const WithSelectedReleaseDateSortAsc = {
  args: {
    ...defaultArgs,
    selectedSort: { option: 'RELEASE DATE', state: 'ASC' }
  }
};

export const WithSelectedReleaseDateSortDesc = {
  args: {
    ...defaultArgs,
    selectedSort: { option: 'RELEASE DATE', state: 'DESC' }
  }
};
