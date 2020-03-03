import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

const testLabel = 'Hello World';

describe('Checkbox', () => {
  afterEach(cleanup);

  it('renders to the document', () => {
    render(<Checkbox defaultValue />);
    const element = document.querySelector('[checked=""]');
    expect(element).toBeInTheDocument();
  });

  it('display label', () => {
    const { getByText } = render(<Checkbox label={testLabel} />);
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });

  it('handles onChange', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Checkbox onChange={handleChange} />);
    const element = getByTestId('checkbox');
    userEvent.click(element);
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange in readonly mode', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Checkbox onChange={handleChange} defaultValue disabled />);
    const element = getByTestId('checkbox');
    fireEvent.click(element);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
