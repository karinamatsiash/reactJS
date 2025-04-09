import PropTypes from 'prop-types';
import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ errorMessage }) => (
  <div className='error-message'>{errorMessage}</div>
);

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  invalid: PropTypes.bool
};

export default ErrorMessage;
