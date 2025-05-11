import { formatNumericDuration, formatStringDuration } from '../formatDuration';

describe('formatDuration', () => {
  it('should format minutes into hours and minutes correctly', () => {
    expect(formatNumericDuration(125)).toBe('2h 5min');
  });

  it('should format only hours when minutes are zero', () => {
    expect(formatNumericDuration(120)).toBe('2h');
  });

  it('should format only minutes when hours are zero', () => {
    expect(formatNumericDuration(45)).toBe('45min');
  });

  it('should return an empty string for zero minutes', () => {
    expect(formatNumericDuration(0)).toBe('');
  });
});

describe('formatStringDuration', () => {
  it('should format hours and minutes correctly', () => {
    expect(formatStringDuration('2h 5min')).toBe(125);
  });

  it('should format hours correctly', () => {
    expect(formatStringDuration('2h')).toBe(120);
  });

  it('should format minutes correctly', () => {
    expect(formatStringDuration('5min')).toBe(5);
  });
});
