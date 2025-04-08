import { GENRES } from '../constants/GenreList';

export const formatMoviesRequestParams = (search, sortBy, genre) => ({
  search,
  sortBy: sortBy?.option.toLowerCase(),
  sortOrder: sortBy?.state.toLowerCase(),
  filter: genre === GENRES[0] ? '' : genre
});
