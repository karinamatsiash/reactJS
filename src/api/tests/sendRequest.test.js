import { sendRequest } from '../sendRequest';

describe('sendRequest', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    jest.resetAllMocks();
    global.fetch = originalFetch;
  });

  it('should return parsed JSON data for successful GET request', async () => {
    const mockData = { test: 'value' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData)
    });

    const result = await sendRequest('/test-endpoint', { signal: null });

    expect(result).toEqual({ result: mockData, isError: false });
    expect(global.fetch).toHaveBeenCalledWith('/test-endpoint', {
      signal: null,
      method: 'GET'
    });
  });

  it('should return null result for DELETE request with ok response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true
    });

    const result = await sendRequest('/test-endpoint', {
      signal: null,
      method: 'DELETE'
    });

    expect(result).toEqual({ result: null, isError: false });
    expect(global.fetch).toHaveBeenCalledWith('/test-endpoint', {
      signal: null,
      method: 'DELETE'
    });
  });

  it('should return isError: true for failed request (non-ok)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500
    });

    const result = await sendRequest('/bad-endpoint', { signal: null });

    expect(result.isError).toBe(true);
    expect(result.result).toBeNull();
  });

  it('should handle AbortError gracefully (isError: false)', async () => {
    const abortError = new DOMException('The user aborted a request.', 'AbortError');
    global.fetch = jest.fn().mockRejectedValue(abortError);

    const result = await sendRequest('/aborted', { signal: null });

    expect(result).toEqual({ result: null, isError: false });
  });

  it('should return isError: true for other exceptions', async () => {
    const error = new Error('Some network issue');
    global.fetch = jest.fn().mockRejectedValue(error);

    const result = await sendRequest('/crash', { signal: null });

    expect(result).toEqual({ result: null, isError: true });
  });
});
