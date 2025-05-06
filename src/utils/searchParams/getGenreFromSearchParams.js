import { DEFAULT_GENRE, GENRES } from '../../constants/Genres';

export const getGenreFromSearchParams = (searchParams) => {
  const searchParamsGenre = searchParams.get('genre');
  const activeGenre =
    searchParamsGenre &&
    GENRES.find((genre) => genre.toLowerCase() === searchParamsGenre.toLowerCase());
  return activeGenre || DEFAULT_GENRE;
};
