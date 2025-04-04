import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GENRES } from '../../constants/GenreList';
import Input from '../shared/Input/Input';
import './MovieForm.scss';
import { FORM_CONTROLS } from '../../constants/MovieForm';
import Button from '../shared/Button/Button';
import MultiSelect from '../shared/MultiSelect/MultiSelect';

const populateFormControls = (value) =>
  FORM_CONTROLS.reduce(
    (validation, control) => ({
      ...validation,
      [control.name]: value
    }),
    {}
  );

const MovieForm = ({ onSubmit, movieData = {} }) => {
  const [formData, setFormData] = useState(movieData);
  const [formValidation, setFormValidation] = useState(populateFormControls(true));

  const getValidity = (data) =>
    Object.entries(data).reduce(
      (validity, [name, value]) => ({ ...validity, [name]: !!value }),
      {}
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = Object.fromEntries(new FormData(event.target));
    const validity = getValidity(formData);

    setFormValidation(validity);

    const isFormValid = !Object.values(validity).some((isValid) => !isValid);

    if (isFormValid) {
      onSubmit(formData);
    }
  };

  const handleBlur = ({ target }) => {
    setFormValidation((prevState) => ({ ...prevState, [target.name]: true }));
  };

  const handleReset = (event) => {
    event.stopPropagation();

    setFormData(populateFormControls(''));
  };

  const handleChange = ({ name, value }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
      {FORM_CONTROLS.map((control) =>
        control.type === 'select' ? (
          <MultiSelect
            key={control.name}
            name={control.name}
            placeholder={control.placeholder}
            className={control.className}
            label={control.label}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={formData[control.name]}
            options={GENRES.slice(1)}
            isValid={formValidation[control.name]}
            errorMessage={control.errorMessage}
            required
          />
        ) : (
          <Input
            key={control.name}
            defaultValue={formData[control.name]}
            isValid={formValidation[control.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            {...control}
          />
        )
      )}

      <footer>
        <Button type='reset'>Reset</Button>
        <Button type='submit' cta>
          Submit
        </Button>
      </footer>
    </form>
  );
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movieData: PropTypes.object
};

export default MovieForm;
