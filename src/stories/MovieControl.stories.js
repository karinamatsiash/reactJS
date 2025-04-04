import React from 'react';
import MovieControl from '../components/MoviesPanel/MovieList/MovieControl/MovieControl';

export default {
  title: 'Example/MovieControl',
  component: MovieControl,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <section style={{ height: '200px' }}>
        <Story />
      </section>
    )
  ],
  tags: ['autodocs'],
  args: {}
};

export const Default = {
  args: {}
};

export const MovieControlWithInitialData = {
  args: {
    mmovieData: {
      name: 'Interstellar',
      releaseYear: '2014-11-07',
      imageUrl: 'Interstellar_film_poster.jpg',
      rating: '8.1',
      genres: 'Adventure, Drama',
      duration: '1h 45min',
      description:
        'It blends hard sci-fi concepts with emotional storytelling, making it a unique cinematic experience. It blends hard sci-fi concepts with emotional storytelling, making it a unique cinematic experience.'
    }
  }
};
