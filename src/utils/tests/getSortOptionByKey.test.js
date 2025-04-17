import { getSortOptionByKey } from '../getSortOptionByKey';

describe('getSortOptionByKey', () => {
  it('should return "TITLE" when option is "title"', () => {
    const result = getSortOptionByKey('title');
    expect(result).toBe('TITLE');
  });

  it('should return "RELEASE DATE" when option is "release_date"', () => {
    const result = getSortOptionByKey('release_date');
    expect(result).toBe('RELEASE DATE');
  });

  it('should return the same option if not "title" or "release_date"', () => {
    const result = getSortOptionByKey('rating');
    expect(result).toBe('rating');
  });

  it('should handle undefined input gracefully', () => {
    const result = getSortOptionByKey(undefined);
    expect(result).toBeUndefined();
  });
});
