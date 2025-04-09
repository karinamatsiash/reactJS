import { formatMoviesResponse } from '../formatMoviesResponse';
import { formatDuration } from '../formatDuration';

jest.mock('../formatDuration');

describe('formatMoviesResponse', () => {
  it('should format movie data correctly', () => {
    const movieData = [
      {
        id: 1,
        title: 'Inception',
        poster_path: 'inception-poster.jpg',
        release_date: '2010-07-16',
        genres: ['Action', 'Sci-Fi'],
        vote_average: 8.8,
        runtime: 148,
        overview: 'overview'
      }
    ];

    formatDuration.mockReturnValue('2h 28min');

    const result = formatMoviesResponse(movieData);

    expect(result).toEqual([
      {
        name: 'Inception',
        id: 1,
        imageUrl: 'inception-poster.jpg',
        releaseYear: '2010-07-16',
        genres: 'Action, Sci-Fi',
        rating: 8.8,
        duration: '2h 28min',
        description: 'overview'
      }
    ]);
  });

  it('should handle empty movie data array', () => {
    const movieData = [];

    const result = formatMoviesResponse(movieData);

    expect(result).toEqual([]);
  });

  it('should call formatDuration with the correct runtime value', () => {
    const movieData = [
      {
        id: 1,
        title: 'Inception',
        poster_path: 'inception-poster.jpg',
        release_date: '2010-07-16',
        genres: ['Action', 'Sci-Fi'],
        vote_average: 8.8,
        runtime: 148,
        overview: 'A thief who steals corporate secrets...'
      }
    ];

    formatMoviesResponse(movieData);

    expect(formatDuration).toHaveBeenCalledWith(148);
  });
});
