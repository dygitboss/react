import React from 'react';
import { render, wait, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import Routes from './Routes';

const renderPage = async (route: string) => {
  const result = render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );

  // wait for root lazy loads
  await wait();

  // wait for dashboard lazy loads
  await wait();

  return result;
};

describe('App', () => {
  afterEach(cleanup);

  test('display onboarding page by default', async () => {
    const { container } = await renderPage(Routes.ONBOARDING);
    expect(container.innerHTML).toContain('<h1>OnboardingPage</h1>');
  });

  test('display dashboard', async () => {
    const { container } = await renderPage(Routes.DASHBOARD);
    expect(container.innerHTML).toContain(Routes.CAMPAIGNS_PAGE);
  });

  test('landing on a bad page shows 404 page', async () => {
    const { container } = await renderPage('/some/bad/route');
    expect(container.innerHTML).toContain('Not Found');
  });
});
