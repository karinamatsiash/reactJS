import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { isElementVisible } from '../../../testing/isElementVisible';
import { isElementNonVisible } from '../../../testing/isElementNonVisible';

describe('ErrorMessage component', () => {
  it('should render the error message when invalid is true', () => {
    render(<ErrorMessage errorMessage='This is an error' invalid={true} />);

    isElementVisible('This is an error');
    expect(screen.getByText('This is an error')).toHaveClass('error-message');
  });

  it('should not render the error message when invalid is false', () => {
    render(<ErrorMessage errorMessage='This is an error' invalid={false} />);

    isElementNonVisible('This is an error');
  });

  it('should render nothing when invalid is false', () => {
    const { container } = render(
      <ErrorMessage errorMessage='This is an error' invalid={false} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render the correct error message text', () => {
    render(<ErrorMessage errorMessage='This is a different error' invalid={true} />);
    isElementVisible('This is a different error');
  });
});
