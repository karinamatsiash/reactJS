import { getSortOptionState } from '../getSortOptionState';

describe('getSortOptionState', () => {
  it('should return "ASC" if prevSort is null or option is different from newSortOption', () => {
    const prevSort = null;
    const newSortOption = 'title';
    const result = getSortOptionState(prevSort, newSortOption);
    expect(result).toBe('ASC');
  });

  it('should return "ASC" if prevSort option is different from newSortOption', () => {
    const prevSort = { option: 'release_date', state: 'ASC' };
    const newSortOption = 'title';
    const result = getSortOptionState(prevSort, newSortOption);
    expect(result).toBe('ASC');
  });

  it('should toggle from "ASC" to "DESC" if prevSort option is same as newSortOption and state is "ASC"', () => {
    const prevSort = { option: 'title', state: 'ASC' };
    const newSortOption = 'title';
    const result = getSortOptionState(prevSort, newSortOption);
    expect(result).toBe('DESC');
  });

  it('should return null if prevSort option is same as newSortOption and state is "DESC"', () => {
    const prevSort = { option: 'title', state: 'DESC' };
    const newSortOption = 'title';
    const result = getSortOptionState(prevSort, newSortOption);
    expect(result).toBeNull();
  });

  it('should return "ASC" if prevSort is undefined', () => {
    const prevSort = undefined;
    const newSortOption = 'release_date';
    const result = getSortOptionState(prevSort, newSortOption);
    expect(result).toBe('ASC');
  });
});
