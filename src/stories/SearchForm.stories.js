import { fn } from '@storybook/test';
import MoviesTopSection from '../components/MoviesTopSection/MoviesTopSection';

export default {
  title: 'Example/MoviesTopSection',
  component: MoviesTopSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onSearch: fn() }
};

export const Default = {
  args: {}
};

export const WithInitialValue = {
  args: {
    initialValue: 'Some movie'
  }
};

export const WithCustomWidth = {
  args: {
    width: 700
  }
};
