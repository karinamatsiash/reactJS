export const getFormValidity = (data) =>
  Object.entries(data).reduce(
    (validity, [name, value]) => ({ ...validity, [name]: !!value }),
    {}
  );
