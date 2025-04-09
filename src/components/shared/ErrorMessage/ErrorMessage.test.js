import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { isElementVisible } from '../../../testing/isElementVisible';

describe('ErrorMessage component', () => {
  it('should render the error message', () => {
    render(<ErrorMessage errorMessage='This is an error' />);
    isElementVisible('This is an error');
  });
});
