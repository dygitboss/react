import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Link from './Link';
import Routes from '../../../config/routes';

const testLabel = '90dsaf8';

const renderLink = (route: string = '') => render(
  <MemoryRouter initialEntries={[route]}>
    <Link to={Routes.DASHBOARD} activeClassName='active'>{testLabel}</Link>
  </MemoryRouter>,
);

describe('Link', () => {
  afterEach(cleanup);

  test('correct href', () => {
    const { getByText } = renderLink();
    const element = getByText(testLabel);
    expect(element.closest('a')).toHaveAttribute('href', Routes.DASHBOARD);
  });

  test('display normal link', () => {
    const { getByText } = renderLink();
    const element = getByText(testLabel);
    expect(element.closest('a')).toBeInTheDocument();
  });

  test('display active link', () => {
    const { getByText } = renderLink(Routes.DASHBOARD);
    const element = getByText(testLabel);
    expect(element.closest('a')).toHaveClass('active');
  });
});
