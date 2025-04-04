import Input from '../components/shared/Input/Input';

const defaultArgs = {
  label: 'Input',
  isValid: true,
  required: true
};

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const InputWithError = {
  args: {
    ...defaultArgs,
    isValid: false,
    errorMessage: 'This input is invalid'
  }
};

export const InputWithInitialValue = {
  args: { ...defaultArgs, value: 'Some default text' }
};

export const InputWithPlaceholder = {
  args: { ...defaultArgs, placeholder: 'Input some text...' }
};

export const InputWithTextareaType = {
  args: { ...defaultArgs, type: 'textarea', placeholder: 'Input some text...' }
};
