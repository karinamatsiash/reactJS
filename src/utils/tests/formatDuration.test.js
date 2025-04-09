import { formatDuration } from '../formatDuration';

describe('formatDuration', () => {
  it('should format minutes into hours and minutes correctly', () => {
    expect(formatDuration(125)).toBe('2h 5min');
  });

  it('should format only hours when minutes are zero', () => {
    expect(formatDuration(120)).toBe('2h');
  });

  it('should format only minutes when hours are zero', () => {
    expect(formatDuration(45)).toBe('45min');
  });

  it('should return an empty string for zero minutes', () => {
    expect(formatDuration(0)).toBe('');
  });
});
