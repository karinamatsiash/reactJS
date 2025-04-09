import { deleteMovieFromList } from '../deleteMovieFromList';
import { sendRequest } from '../sendRequest';

jest.mock('../sendRequest');

describe('deleteMovieFromList', () => {
  const movieId = 123;

  it('should call sendRequest with correct URL and method', async () => {
    sendRequest.mockResolvedValue({ result: {}, isError: false });

    await deleteMovieFromList(movieId);

    expect(sendRequest).toHaveBeenCalledWith(`/movies/${movieId}`, { method: 'DELETE' });
  });

  it('should return the response from sendRequest', async () => {
    const mockResponse = { result: { success: true }, isError: false };
    sendRequest.mockResolvedValue(mockResponse);

    const response = await deleteMovieFromList(movieId);

    expect(response).toEqual(mockResponse);
  });

  it('should handle errors from sendRequest', async () => {
    const mockError = { result: null, isError: true };
    sendRequest.mockResolvedValue(mockError);

    const response = await deleteMovieFromList(movieId);

    expect(response).toEqual(mockError);
  });
});
