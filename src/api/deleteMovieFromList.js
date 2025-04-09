import { sendRequest } from './sendRequest';

export const deleteMovieFromList = async (movieId) => {
  const movieListUrl = `/movies/${movieId}`;
  return sendRequest(movieListUrl, { method: 'DELETE' });
};
