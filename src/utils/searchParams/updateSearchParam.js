export const updateSearchParam = (prevParams, newParams) => {
  const updatedParams = new URLSearchParams(prevParams);
  Object.entries(newParams).forEach(([key, value]) => {
    if (!value) {
      updatedParams.delete(key);
    } else {
      updatedParams.set(key, value);
    }
  });
  return updatedParams;
};
