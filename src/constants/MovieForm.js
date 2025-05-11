export const FORM_CONTROLS = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Movie title',
    label: 'Title',
    className: 'medium',
    errorMessage: 'Please, enter movie title'
  },
  {
    name: 'releaseDate',
    type: 'date',
    placeholder: 'Select Date',
    label: 'Release Date',
    className: 'small',
    errorMessage: 'Please, enter movie release date'
  },
  {
    name: 'imageUrl',
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
    name: 'genres',
    type: 'select',
    placeholder: 'Select Genre',
    label: 'Genre',
    className: 'medium',
    errorMessage: 'Please, enter at least 1 movie genre'
  },
  {
    name: 'duration',
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
