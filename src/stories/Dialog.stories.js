import { fn } from '@storybook/test';
import Dialog from '../components/shared/Dialog/Dialog';

const defaultArgs = {
  onClose: fn(),
  title: 'DIALOG TITLE',
  children: 'Some dialog body'
};

export default {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      page: null
    }
  },
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};
