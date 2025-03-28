import { fn } from '@storybook/test';
import MovieSort from '../components/MoviesPanel/MovieToolbar/MovieSort/MovieSort';

const defaultArgs = {
  onSortBy: fn(),
  selectedSort: null
};

export default {
  title: 'Example/MovieSort',
  component: MovieSort,
  parameters: {
    layout: 'centered'
  },
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
