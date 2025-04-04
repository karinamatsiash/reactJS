import MovieGenres from '../components/shared/MovieGenres/MovieGenres';
import { GENRES } from '../constants/GenreList';

export default {
  title: 'Example/MovieGenres',
  component: MovieGenres,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { genres: GENRES.join(', ') }
};

export const Default = {
  args: {}
};
