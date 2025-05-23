import React, { useState } from 'react';
import './MovieControl.scss';
import PropTypes from 'prop-types';
import MovieForm from '../MovieForm/MovieForm';
import Dialog from '../shared/Dialog/Dialog';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DeleteForm from '../DeleteForm/DeleteForm';
import { IoCloseOutline } from 'react-icons/io5';
import { deleteMovieFromList } from '../../api/deleteMovieFromList';

const MovieControl = ({ movieData, onMovieDelete }) => {
  const [showControl, setShowControl] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState(false);

  const onControlOpen = (event) => {
    event.stopPropagation();
    setShowControl(true);
  };
  const onControlClose = (event) => {
    event.stopPropagation();
    setShowControl(false);
  };

  const onEditClick = (event) => {
    event.stopPropagation();
    setShowControl(false);
    setShowEditDialog(true);
  };
  const onDeleteClick = (event) => {
    event.stopPropagation();
    setShowControl(false);
    setShowDeleteDialog(true);
  };

  const onEditDialogClose = () => setShowEditDialog(false);
  const onDeleteDialogClose = () => setShowDeleteDialog(false);

  const onDeleteConfirm = async () => {
    const { isError } = await deleteMovieFromList(movieData.id, 'DELETE');
    if (!isError) {
      setShowDeleteDialog(false);
      onMovieDelete();
    }
    setIsDeleteError(isError);
  };

  return (
    <>
      <div className='movie-control'>
        {showControl ? (
          <div className='movie-control_options'>
            <div className='movie-control_close-button'>
              <IoCloseOutline onClick={onControlClose} />
            </div>

            <ul>
              <li onClick={onEditClick}>Edit</li>
              <li onClick={onDeleteClick}>Delete</li>
            </ul>
          </div>
        ) : (
          <div className='movie-control_button' onClick={onControlOpen}>
            {<BsThreeDotsVertical />}
          </div>
        )}
      </div>

      {showEditDialog && (
        <Dialog onClose={onEditDialogClose} title={'EDIT MOVIE'}>
          <MovieForm movieData={movieData} onSubmit={onEditDialogClose} />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog onClose={onDeleteDialogClose} title={'DELETE MOVIE'} width='680px'>
          <DeleteForm isError={isDeleteError} onConfirm={onDeleteConfirm} />
        </Dialog>
      )}
    </>
  );
};

MovieControl.propTypes = {
  movieData: PropTypes.object.isRequired,
  onMovieDelete: PropTypes.func.isRequired
};

export default MovieControl;
