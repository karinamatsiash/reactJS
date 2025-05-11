export const sendRequest = async (url, { signal, method = 'GET', body, headers }) => {
  try {
    const response = await fetch(url, { signal, method, body, headers });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = method === 'DELETE' ? null : await response.json();

    return { result: data, isError: false };
  } catch (err) {
    return { result: null, isError: err.name !== 'AbortError' };
  }
};
