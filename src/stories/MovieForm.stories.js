import React from 'react';
import { fn } from '@storybook/test';
import MovieForm from '../components/MovieForm/MovieForm';

const defaultArgs = {
  onSubmit: fn()
};

export default {
  title: 'Example/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <section style={{ backgroundColor: '#232323', padding: '20px' }}>
        <Story />
      </section>
    )
  ],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const MovieFormWithInitialData = {
  args: {
    ...defaultArgs,
    movieData: {
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
