import PropTypes from 'prop-types';
import React from 'react';
import './Checkbox.scss';

const Checkbox = ({ option, ...checkBoxArgs }) => {
  return (
    <label className='checkbox-label'>
      <input type='checkbox' {...checkBoxArgs} />
      {option}
    </label>
  );
};

Checkbox.propTypes = {
  option: PropTypes.string.isRequired
};

export default Checkbox;
