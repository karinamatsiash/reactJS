export const getSortOptionByKey = (option) => {
  switch (option) {
    case 'title':
      return 'TITLE';
    case 'release_date':
      return 'RELEASE DATE';
    default:
      return option;
  }
};
