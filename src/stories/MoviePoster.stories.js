import MoviePoster from '../components/shared/MoviePoster/MoviePoster';

export default {
  title: 'Example/MoviePoster',
  component: MoviePoster,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { imageUrl: 'Interstellar_film_poster.jpg' }
};

export const Default = {
  args: {}
};
