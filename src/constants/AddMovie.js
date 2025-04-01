export const FORM_CONTROLS = [
  {
    name: 'title',
    type: 'text',
    placeholder: 'Movie title',
    label: 'Title',
    className: 'medium',
    errorMessage: 'Please, enter movie title'
  },
  {
    name: 'date',
    type: 'date',
    placeholder: 'Select Date',
    label: 'Release Date',
    className: 'small',
    errorMessage: 'Please, enter movie release date'
  },
  {
    name: 'url',
    type: 'text',
    placeholder: 'https://',
    label: 'Movie Url',
    className: 'medium',
    errorMessage: 'Please, enter movie url'
  },
  {
    name: 'rating',
    type: 'number',
    placeholder: '7.8',
    step: '0.1',
    min: 0,
    max: 10,
    label: 'Rating',
    className: 'small',
    errorMessage: 'Please, enter movie raiting'
  },
  {
    name: 'genre',
    type: 'select',
    placeholder: '7.8',
    label: 'Genre',
    className: 'medium',
    errorMessage: 'Please, enter at least 1 movie genre'
  },
  {
    name: 'runtime',
    type: 'text',
    placeholder: 'minutes',
    label: 'Runtime',
    className: 'small',
    errorMessage: 'Please, enter movie runtime'
  },
  {
    name: 'description',
    type: 'textarea',
    placeholder: 'Movie description',
    label: 'Overview',
    className: 'large',
    errorMessage: 'Please, enter movie description'
  }
];
