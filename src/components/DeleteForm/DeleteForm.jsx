import PropTypes from 'prop-types';
import React from 'react';
import Button from '../shared/Button/Button';
import './DeleteForm.scss';

const DeleteForm = ({ onConfirm }) => {
  return (
    <div className='delete-form'>
      <div className='delete-form_text'>Are you sure you want to delete this movie?</div>
      <footer>
        <Button cta onClick={onConfirm}>
          Confirm
        </Button>
      </footer>
    </div>
  );
};

DeleteForm.propTypes = {
  onConfirm: PropTypes.func.isRequired
};

export default DeleteForm;
