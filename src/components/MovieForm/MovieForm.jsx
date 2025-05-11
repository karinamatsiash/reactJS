import PropTypes from 'prop-types';
import React from 'react';
import { GENRES } from '../../constants/Genres';
import Input from '../shared/Input/Input';
import './MovieForm.scss';
import { FORM_CONTROLS } from '../../constants/MovieFormControls';
import Button from '../shared/Button/Button';
import MultiSelect from '../shared/MultiSelect/MultiSelect';
import { Controller, useForm } from 'react-hook-form';

const MovieForm = ({ onSubmit, movieData = {} }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({ defaultValues: movieData });

  const onFormSubmit = (formData) => {
    const isFormValid = !Object.values(errors).some(Boolean);

    if (isFormValid) {
      onSubmit(formData);
    }
  };

  const handleReset = (event) => {
    event.stopPropagation();
    reset({ genres: '' });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} onReset={handleReset} noValidate>
      {FORM_CONTROLS.map(({ errorMessages, validation, name, ...controlItem }) =>
        controlItem.type === 'select' ? (
          <Controller
            key={name}
            name={name}
            control={control}
            rules={validation}
            render={({ field, fieldState }) => (
              <MultiSelect
                {...field}
                options={GENRES.slice(1)}
                isValid={!fieldState.error}
                errorMessage={errorMessages[errors[name]?.type]}
                {...controlItem}
              />
            )}
          />
        ) : (
          <Input
            key={name}
            isValid={!errors[name]}
            errorMessage={errorMessages[errors[name]?.type]}
            {...controlItem}
            {...register(name, validation)}
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
