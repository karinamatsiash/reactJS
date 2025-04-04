import ErrorMessage from '../components/shared/ErrorMessage/ErrorMessage';

const defaultArgs = {
  errorMessage: 'Some text with error message.'
};

export default {
  title: 'Example/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};
