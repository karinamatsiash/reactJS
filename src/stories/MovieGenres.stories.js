import MovieGenres from '../components/shared/MovieGenres/MovieGenres';
import { GENRES } from '../constants/genreList';

export default {
  title: 'Example/MovieGenres',
  component: MovieGenres,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { genres: GENRES }
};

export const Default = {
  args: {}
};
