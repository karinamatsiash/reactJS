import { fetchMovieList } from '../fetchMovieList';
import { sendRequest } from '../sendRequest';

jest.mock('../sendRequest');

describe('fetchMovieList', () => {
  const mockController = { signal: 'mock-signal' };

  it('should call sendRequest with base URL when no params provided', async () => {
    const params = {};
    await fetchMovieList(params, mockController);

    expect(sendRequest).toHaveBeenCalledWith('/movies?searchBy=title&limit=50', {
      signal: 'mock-signal'
    });
  });

  it('should build query string correctly from params', async () => {
    const params = {
      sortBy: 'release_date',
      sortOrder: 'ASC',
      genre: 'Action'
    };

    await fetchMovieList(params, mockController);

    expect(sendRequest).toHaveBeenCalledWith(
      expect.stringContaining('/movies?searchBy=title&limit=50&'),
      { signal: 'mock-signal' }
    );

    const [[url]] = sendRequest.mock.calls;
    expect(url).toContain('sortBy=release_date');
    expect(url).toContain('sortOrder=ASC');
    expect(url).toContain('genre=Action');
  });

  it('should ignore falsy values in params', async () => {
    const params = {
      sortBy: 'release_date',
      sortOrder: null,
      genre: undefined,
      search: ''
    };

    await fetchMovieList(params, mockController);

    const [[url]] = sendRequest.mock.calls;
    expect(url).toContain('sortBy=release_date');
    expect(url).not.toContain('sortOrder=');
    expect(url).not.toContain('genre=');
    expect(url).not.toContain('search=');
  });

  it('should pass the controller signal to sendRequest', async () => {
    const params = { sortBy: 'title' };

    await fetchMovieList(params, mockController);

    expect(sendRequest).toHaveBeenCalledWith(expect.any(String), {
      signal: 'mock-signal'
    });
  });
});
