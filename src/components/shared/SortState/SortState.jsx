import React from 'react';
import './SortState.scss';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

export const SortState = ({ sortState }) => {
  if (!sortState) {
    return null;
  }

  return (
    <div className='sort-state'>
      {sortState === 'ASC' ? (
        <BiSolidUpArrow className='sort-state_option' />
      ) : (
        <BiSolidDownArrow className='sort-state_option' />
      )}
    </div>
  );
};

SortState.propTypes = {
  sortState: PropTypes.string.isRequired
};

export default SortState;
