import React from 'react';
import Dialog from '../shared/Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { useNavigate, useSearchParams } from 'react-router';
import { addNewMovie } from '../../api/addNewMovie';

export const AddMovieForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onAddMovieSubmit = async (formData) => {
    const { isError } = await addNewMovie(formData);
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
    <Dialog onClose={closeMovieDialog} title={'ADD MOVIE'}>
      <MovieForm onSubmit={onAddMovieSubmit} />
    </Dialog>
  );
};

export default AddMovieForm;
