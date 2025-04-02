import { fn } from '@storybook/test';
import SearchForm from '../components/SearchForm/SearchForm';

export default {
  title: 'Example/SearchForm',
  component: SearchForm,
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
