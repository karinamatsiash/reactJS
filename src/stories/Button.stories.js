import Button from '../components/shared/Button/Button';

const defaultArgs = {
  children: 'Submit'
};

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};

export const CtaButton = {
  args: { ...defaultArgs, cta: true }
};

export const TransparentButton = {
  args: { ...defaultArgs, transparent: true }
};
