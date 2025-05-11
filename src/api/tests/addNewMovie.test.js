import { addNewMovie } from '../addNewMovie';
import { sendRequest } from '../sendRequest';

jest.mock('../sendRequest');

describe('addNewMovie', () => {
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
  const formattedMovieData = {
    title: 'Inception',
    vote_average: 8.8,
    release_date: '2010-07-16',
    poster_path: 'inception-poster.jpg',
    overview: 'overview',
    runtime: 148,
    genres: ['Action', 'Sci-Fi'],
    id: 1
  };

  it('should call sendRequest with correct URL and method', async () => {
    sendRequest.mockResolvedValue({ result: {}, isError: false });

    await addNewMovie(movieData);

    expect(sendRequest).toHaveBeenCalledWith('/movies', {
      method: 'POST',
      body: JSON.stringify(formattedMovieData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  });

  it('should handle errors from sendRequest', async () => {
    const mockError = { result: null, isError: true };
    sendRequest.mockResolvedValue(mockError);

    const response = await addNewMovie(movieData);

    expect(response).toEqual(mockError);
  });
});
