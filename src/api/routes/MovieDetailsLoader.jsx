import { fetchMovie } from '../fetchMovie';

const MovieDetailsLoader = async ({ params }) => {
  const movieData = await fetchMovie(params.movieId);
  return { movieData };
};

export default MovieDetailsLoader;
