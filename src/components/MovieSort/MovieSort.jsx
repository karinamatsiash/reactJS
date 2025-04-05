import React from 'react';
import './MovieSort.scss';
import { SORT_OPTIONS } from '../../constants/SortOptions';
import classNames from 'classnames';
import SortState from '../shared/SortState/SortState';
import PropTypes from 'prop-types';

export const MovieSort = ({ selectedSort, onSortBy }) => {
  const { option: selectedOption, state: sortState } = selectedSort || {};

  const getOptionState = (option) =>
    sortState && option === selectedOption ? (
      <SortState sortState={sortState}></SortState>
    ) : null;

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
            className={classNames('movie-sort_name', {
              selected: item === selectedOption
            })}
          >
            {item}
          </div>
          {getOptionState(item)}
        </div>
      ))}
    </div>
  );
};

MovieSort.propTypes = {
  selectedSort: PropTypes.object,
  onSortBy: PropTypes.func.isRequired
};

export default MovieSort;
