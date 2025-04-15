import { DEFAULT_GENRE } from '../constants/Genres';

export const formatMoviesRequestParams = (search, sortBy, genre) => ({
  search,
  sortBy: sortBy?.option.toLowerCase(),
  sortOrder: sortBy?.state.toLowerCase(),
  filter: genre === DEFAULT_GENRE ? '' : genre
});
