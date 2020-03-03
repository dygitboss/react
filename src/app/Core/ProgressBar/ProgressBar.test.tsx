import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProgressBar from './ProgressBar';

const value = 25;
const role = 'progressbar';

describe('ProgressBar', () => {
  afterEach(cleanup);

  it('renders to the document', () => {
    const { getByRole } = render(<ProgressBar value={value} />);
    const element = getByRole(role);
    expect(element).toBeInTheDocument();
  });

  it('supports red color', () => {
    const { getByRole } = render(<ProgressBar value={value} color='red' />);
    const element = getByRole(role);
    expect(element.closest('div')).toHaveClass('red');
  });

  it('supports green color', () => {
    const { getByRole } = render(<ProgressBar value={value} color='green' />);
    const element = getByRole(role);
    expect(element).toHaveClass('green');
  });

  it('supports blue color', () => {
    const { getByRole } = render(<ProgressBar value={value} color='blue' />);
    const element = getByRole(role);
    expect(element).toHaveClass('blue');
  });

  it('supports orange color', () => {
    const { getByRole } = render(<ProgressBar value={value} color='orange' />);
    const element = getByRole(role);
    expect(element).toHaveClass('orange');
  });
});
