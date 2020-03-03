import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  afterEach(cleanup);

  test('renders onboarding', () => {
    const { getByText } = render(<NotFoundPage />);
    const linkElement = getByText(/Not Found/i);
    expect(linkElement).toBeInTheDocument();
  });
});
