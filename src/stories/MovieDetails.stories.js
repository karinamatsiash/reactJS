import { fn } from '@storybook/test';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default {
  title: 'Example/MovieDetails',
  component: MovieDetails,
  tags: ['autodocs'],
  args: {
    onSearchClick: fn(),
    movieData: {
      name: 'Interstellar',
      id: '3498',
      imageUrl: 'Interstellar_film_poster.jpg',
      releaseYear: 2014,
      genres: ['ADVENTURE', 'DRAMA'],
      rating: '8.1',
      duration: '1h 45min',
      description:
        'It blends hard sci-fi concepts with emotional storytelling, making it a unique cinematic experience. It blends hard sci-fi concepts with emotional storytelling, making it a unique cinematic experience.'
    }
  }
};

export const Default = {
  args: {}
};
