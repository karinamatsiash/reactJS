import { fn } from '@storybook/test';
import MultiSelect from '../components/shared/MultiSelect/MultiSelect';
import { GENRES } from '../constants/Genres';

const defaultArgs = {
  options: GENRES,
  label: 'Multi Select',
  defaultValue: null,
  name: 'genres',
  required: true,
  errorMessage: 'There is some error!',
  isValid: true,
  onChange: fn(),
  onBlur: fn()
};

export default {
  title: 'Example/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        height: '400px'
      }
    }
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const MultiSelectWithPlaceholder = {
  args: { ...defaultArgs, placeholder: 'Select Genre' }
};

export const MultiSelectWithInitialValues = {
  args: {
    ...defaultArgs,
    placeholder: 'Select Genre',
    defaultValue: 'Comedy, Drama'
  }
};
