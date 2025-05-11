import { formatNumericDuration, formatStringDuration } from './formatDuration';

export const formatMoviesResponse = (movieData) => movieData.map(formatMovieResponse);

export const formatMovieResponse = (item) => ({
  name: item.title,
  id: item.id,
  imageUrl: item.poster_path,
  releaseDate: item.release_date,
  genres: item.genres.join(', '),
  rating: item.vote_average,
  duration: formatNumericDuration(item.runtime),
  description: item.overview
});

export const formatAddMovieRequestParams = (data) => ({
  title: data.name,
  vote_average: +data.rating,
  release_date: data.releaseDate,
  poster_path: data.imageUrl,
  overview: data.description,
  runtime: formatStringDuration(data.duration),
  genres: data.genres.split(', '),
  id: data.id ?? undefined
});
