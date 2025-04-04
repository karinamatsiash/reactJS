import Checkbox from '../components/shared/Checkbox/Checkbox';

const defaultArgs = {
  option: 'On'
};

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const CheckedCheckbox = {
  args: { ...defaultArgs, checked: true }
};

export const NonCheckedCheckbox = {
  args: { ...defaultArgs, checked: false }
};
