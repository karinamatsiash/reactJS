export const getSortOptionState = (prevSort, newSortOption) => {
  if (!prevSort || prevSort.option !== newSortOption) {
    return 'ASC';
  } else if (prevSort.option === newSortOption && prevSort.state === 'ASC') {
    return 'DESC';
  }

  return null;
};
