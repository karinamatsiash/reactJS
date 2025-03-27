import React from 'react';
import './SortState.scss';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

export const SortState = ({ state }) => {
  if (!state) {
    return null;
  }

  return (
    <div className='sort-state'>
      {state === 'ASC' ? (
        <BiSolidUpArrow className='sort-state_option' />
      ) : (
        <BiSolidDownArrow className='sort-state_option' />
      )}
    </div>
  );
};

export default SortState;
