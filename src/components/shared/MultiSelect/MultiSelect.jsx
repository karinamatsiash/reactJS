import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import './MultiSelect.scss';
import classNames from 'classnames';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

const SEPARATOR = ', ';
const formatItems = (values) => [...values].join(SEPARATOR);

const MultiSelect = ({
  options,
  className,
  name,
  errorMessage,
  isValid,
  value,
  onChange,
  ...inputArgs
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [values, setValues] = useState(new Set(value?.split(SEPARATOR)));

  const dropdownRef = useRef(null);
  const invalid = !isValid;

  useEffect(() => {
    setValues(new Set(value ? value.split(SEPARATOR) : []));
  }, [value]);

  useEffect(() => {
    if (isDropdownOpened) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpened, values]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpened(false);
      onChange({
        target: { name, value: formatItems(values) }
      });
    }
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setIsDropdownOpened((prevState) => !prevState);
  };

  const handleItemSelect = ({ target }) => {
    setValues((prevState) => {
      const newState = new Set(prevState);
      if (target.checked) {
        newState.add(target.value);
      } else {
        newState.delete(target.value);
      }
      return newState;
    });
  };

  return (
    <div className={`multi-select ${className}`}>
      <div className='multi-select_input-wrapper' ref={dropdownRef}>
        <Input
          className={classNames('multi-select_input', { invalid })}
          value={values.size > 0 ? formatItems(values) : ''}
          onClick={handleInputClick}
          isValid={isValid}
          onChange={onChange}
          required
          readOnly
          {...inputArgs}
        />

        <div className='multi-select_arrow' onClick={handleInputClick}>
          {isDropdownOpened ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
        </div>

        {isDropdownOpened && (
          <div className='multi-select_dropdown'>
            {options.map((option) => (
              <div key={option}>
                <Checkbox
                  name={name}
                  value={option}
                  checked={values.has(option)}
                  option={option}
                  onChange={handleItemSelect}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {invalid && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

MultiSelect.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default MultiSelect;
