import { formatMoviesRequestParams } from '../formatMoviesRequestParams';
import { DEFAULT_GENRE } from '../../constants/Genres';

describe('formatMoviesRequestParams', () => {
  it('should format request params correctly when all fields are provided', () => {
    const search = 'Inception';
    const sortBy = { option: 'Release Date', state: 'ASC' };
    const genre = 'Action';

    const result = formatMoviesRequestParams(search, sortBy, genre);

    expect(result).toEqual({
      search: 'Inception',
      sortBy: 'release date',
      sortOrder: 'asc',
      filter: 'Action'
    });
  });

  it('should use an empty filter for the default genre', () => {
    const search = 'Inception';
    const sortBy = { option: 'Release Date', state: 'ASC' };
    const genre = DEFAULT_GENRE;

    const result = formatMoviesRequestParams(search, sortBy, genre);

    expect(result).toEqual({
      search: 'Inception',
      sortBy: 'release date',
      sortOrder: 'asc',
      filter: ''
    });
  });

  it('should handle undefined sortBy correctly', () => {
    const search = 'Inception';
    const genre = 'Action';

    const result = formatMoviesRequestParams(search, undefined, genre);

    expect(result).toEqual({
      search: 'Inception',
      sortBy: undefined,
      sortOrder: undefined,
      filter: 'Action'
    });
  });

  it('should handle undefined genre and default it to empty filter', () => {
    const search = 'Inception';
    const sortBy = { option: 'Release Date', state: 'ASC' };
    const genre = undefined;

    const result = formatMoviesRequestParams(search, sortBy, genre);

    expect(result).toEqual({
      search: 'Inception',
      sortBy: 'release date',
      sortOrder: 'asc'
    });
  });
});
