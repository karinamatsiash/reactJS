import React from 'react';
import { fn } from '@storybook/test';
import DeleteForm from '../components/DeleteForm/DeleteForm';

const defaultArgs = {
  onConfirm: fn()
};

export default {
  title: 'Example/DeleteForm',
  component: DeleteForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <section
        style={{
          backgroundColor: '#232323',
          padding: '20px',
          widht: '400px'
        }}
      >
        <Story />
      </section>
    )
  ],
  tags: ['autodocs'],
  args: defaultArgs
};

export const Default = {
  args: {}
};
