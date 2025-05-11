import { formatAddMovieRequestParams } from '../utils/formatMoviesResponse';
import { sendRequest } from './sendRequest';

export const addNewMovie = async (movieData) => {
  const movieListUrl = `/movies`;
  const body = JSON.stringify(formatAddMovieRequestParams(movieData));

  return sendRequest(movieListUrl, {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
