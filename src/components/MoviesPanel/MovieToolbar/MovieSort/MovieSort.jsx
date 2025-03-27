import React from 'react';
import './MovieSort.scss';
import { SORT_OPTIONS } from '../../../../constants/sortOptions';
import classNames from 'classnames';
import SortState from '../../../shared/SortState/SortState';

export const MovieSort = ({ selectedSort, onSortBy }) => {
  const { option: selectedOption, state } = selectedSort || {};

  console.log(selectedSort);

  const getOptionState = (option) =>
    state && option === selectedOption ? <SortState state={state}></SortState> : null;

  const onSortClick = (ev) => {
    onSortBy(ev.target.id);
  };

  return (
    <div className='movie-sort'>
      <div className='movie-sort_label'>{'SORT BY'}</div>

      {SORT_OPTIONS.map((item) => (
        <div key={item} className='movie-sort_option'>
          <div
            id={item}
            onClick={onSortClick}
            className={classNames('movie-sort_name', { selected: item === selectedOption })}
          >
            {item}
          </div>
          {getOptionState(item)}
        </div>
      ))}
    </div>
  );
};

export default MovieSort;
