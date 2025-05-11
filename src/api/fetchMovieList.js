import { sendRequest } from './sendRequest';

export const fetchMovieList = async (params, controller) => {
  const queryString = Object.entries(params)
    .filter(([, value]) => !!value)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  let movieListUrl = `/movies?searchBy=title&limit=50`;

  if (queryString) {
    movieListUrl = `${movieListUrl}&${queryString}`;
  }

  return sendRequest(movieListUrl, { signal: controller?.signal });
};
