import { fn } from '@storybook/test';
import MoviesPanel from '../components/MoviesPanel/MoviesPanel';
import { MOVIES_LIST } from '../constants/moviesList';

export default {
  title: 'Example/MoviesPanel',
  component: MoviesPanel,
  tags: ['autodocs'],
  args: {
    openMovieDetails: fn(),
    movieList: MOVIES_LIST
  }
};

export const Default = {
  args: {}
};
