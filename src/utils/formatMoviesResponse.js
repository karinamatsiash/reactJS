import { formatDuration } from './formatDuration';

export const formatMoviesResponse = (movieData) => movieData.map(formatMovieResponse);

export const formatMovieResponse = (item) => ({
  name: item.title,
  id: item.id,
  imageUrl: item.poster_path,
  releaseYear: item.release_date,
  genres: item.genres.join(', '),
  rating: item.vote_average,
  duration: formatDuration(item.runtime),
  description: item.overview
});
