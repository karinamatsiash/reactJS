import PropTypes from 'prop-types';
import React from 'react';
import Button from '../shared/Button/Button';
import './DeleteForm.scss';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';

const DeleteForm = ({ onConfirm, isError }) => {
  return (
    <div className='delete-form'>
      <div className='delete-form_text'>Are you sure you want to delete this movie?</div>
      {isError && (
        <ErrorMessage errorMessage={'Something went wrong while removing this movie.'} />
      )}
      <footer>
        <Button cta onClick={onConfirm}>
          Confirm
        </Button>
      </footer>
    </div>
  );
};

DeleteForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
};

export default DeleteForm;
