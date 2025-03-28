import { fn } from '@storybook/test';
import MovieToolbar from '../components/MoviesPanel/MovieToolbar/MovieToolbar';
import { GENRES } from '../constants/genreList';

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
