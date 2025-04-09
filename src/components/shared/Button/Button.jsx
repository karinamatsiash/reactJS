import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';
import classNames from 'classnames';

const Button = ({ cta, transparent, children, ...buttonArgs }) => {
  return (
    <button className={classNames({ cta, transparent })} {...buttonArgs}>
      {children}
    </button>
  );
};

Button.propTypes = {
  cta: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default Button;
