import Counter from '../components/Counter/Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs']
};

export const WithInitialValue = {
  args: {
    initialValue: 10
  }
};

export const WithoutInitialValue = {
  args: {}
};

export const CallToAction = {
  args: { cta: true }
};
