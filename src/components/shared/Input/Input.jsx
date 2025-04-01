import PropTypes from 'prop-types';
import React from 'react';
import './Input.scss';
import classNames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Input = ({ label, className, errorMessage, isValid, ...inputArgs }) => {
  const invalid = inputArgs.required && !isValid;

  return (
    <div className={className}>
      {label && <label htmlFor={inputArgs.name}>{label}</label>}

      {inputArgs.type === 'textarea' ? (
        <textarea {...inputArgs} className={classNames({ invalid })}></textarea>
      ) : (
        <input {...inputArgs} className={classNames({ invalid })}></input>
      )}

      <ErrorMessage errorMessage={errorMessage} invalid={invalid} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool
};

export default Input;
