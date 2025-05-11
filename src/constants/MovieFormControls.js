export const FORM_CONTROLS = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Movie title',
    label: 'Title',
    className: 'medium',
    errorMessages: {
      required: 'Please, enter movie title'
    },
    validation: {
      required: true
    }
  },
  {
    name: 'releaseDate',
    type: 'date',
    placeholder: 'Select Date',
    label: 'Release Date',
    className: 'small',
    errorMessages: {
      required: 'Please, enter movie release date'
    },
    validation: {
      required: true
    }
  },
  {
    name: 'imageUrl',
    type: 'text',
    placeholder: 'https://',
    label: 'Movie Url',
    className: 'medium',
    errorMessages: {
      required: 'Please, enter movie url'
    },
    validation: {
      required: true
    }
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
    errorMessages: {
      required: 'Please, enter movie raiting',
      pattern: 'Please, enter number value',
      min: 'Please, enter value from 0 to 10',
      max: 'Please, enter value from 0 to 10'
    },
    validation: {
      required: true,
      min: 0,
      max: 10,
      pattern: /^\d+(\.\d+)?$/
    }
  },
  {
    name: 'genres',
    type: 'select',
    placeholder: 'Select Genre',
    label: 'Genre',
    className: 'medium',
    errorMessages: {
      required: 'Please, enter at least 1 movie genre'
    },
    validation: {
      required: true
    }
  },
  {
    name: 'duration',
    type: 'text',
    placeholder: 'minutes',
    label: 'Runtime',
    className: 'small',
    errorMessages: {
      required: 'Please, enter movie runtim',
      pattern: 'Please, enter time in format {x}h {y}min'
    },
    validation: {
      required: true,
      pattern: /^((([1-9]\d*)h)?\s?(([1-9]\d*)min)?)$/
    }
  },
  {
    name: 'description',
    type: 'textarea',
    placeholder: 'Movie description',
    label: 'Overview',
    className: 'large',
    errorMessages: {
      required: 'Please, enter movie description'
    },
    validation: {
      required: true
    }
  }
];
