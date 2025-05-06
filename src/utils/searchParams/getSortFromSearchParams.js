export const getSortFromSearchParams = (searchParams) => {
  const option = searchParams.get('sortOption');
  const state = searchParams.get('sortState');

  return option && state ? { option, state } : null;
};
