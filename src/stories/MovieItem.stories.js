import MovieItem from '../components/MoviesPanel/MovieList/MovieItem/MovieItem';
import { MOVIES_LIST } from '../constants/moviesList';

export default {
  title: 'Example/MovieItem',
  component: MovieItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { movieData: MOVIES_LIST[0] }
};

export const Default = {
  args: {}
};

export const WithLongMovieName = {
  args: { movieData: MOVIES_LIST[4] }
};
