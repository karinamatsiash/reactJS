import {
  formatAddMovieRequestParams,
  formatMoviesResponse
} from '../formatMoviesResponse';

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

    const result = formatMoviesResponse(movieData);

    expect(result).toEqual([
      {
        name: 'Inception',
        id: 1,
        imageUrl: 'inception-poster.jpg',
        releaseDate: '2010-07-16',
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
});

describe('formatAddMovieRequestParams', () => {
  it('should format movie data correctly', () => {
    const movieData = {
      name: 'Inception',
      id: 1,
      imageUrl: 'inception-poster.jpg',
      releaseDate: '2010-07-16',
      genres: 'Action, Sci-Fi',
      rating: 8.8,
      duration: '2h 28min',
      description: 'overview'
    };

    const result = formatAddMovieRequestParams(movieData);

    expect(result).toEqual({
      id: 1,
      title: 'Inception',
      poster_path: 'inception-poster.jpg',
      release_date: '2010-07-16',
      genres: ['Action', 'Sci-Fi'],
      vote_average: 8.8,
      runtime: 148,
      overview: 'overview'
    });
  });
});
