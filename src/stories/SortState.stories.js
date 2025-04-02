import SortState from '../components/shared/SortState/SortState';

export default {
  title: 'Example/SortState',
  component: SortState,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { sortState: 'ASC' }
};

export const AscSort = {
  args: {}
};

export const DescSort = {
  args: { sortState: 'DESC' }
};
