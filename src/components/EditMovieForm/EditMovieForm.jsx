import React from 'react';
import Dialog from '../shared/Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router';
import { editMovie } from '../../api/editMovie';
import { formatMovieResponse } from '../../utils/formatMoviesResponse';

export const EditMovieForm = () => {
  const navigate = useNavigate();
  const { movieData } = useLoaderData();
  const [searchParams] = useSearchParams();
  const formattedMovieData = formatMovieResponse(movieData.result);

  const onEditMovieSubmit = async (formData) => {
    const { isError } = await editMovie({ ...formData, id: formattedMovieData.id });
    if (!isError) {
      closeMovieDialog();
    }
  };

  const closeMovieDialog = () =>
    navigate({
      pathname: `/`,
      search: searchParams.toString()
    });

  return (
    <Dialog onClose={closeMovieDialog} title={'EDIT MOVIE'}>
      <MovieForm onSubmit={onEditMovieSubmit} movieData={formattedMovieData} />
    </Dialog>
  );
};

export default EditMovieForm;
