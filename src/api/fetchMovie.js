import { sendRequest } from './sendRequest';

export const fetchMovie = async (movieId) => {
  const movieListUrl = `/movies/${movieId}`;
  return sendRequest(movieListUrl, {});
};
