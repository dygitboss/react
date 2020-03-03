import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TwoColumnLayout from './TwoColumnLayout';

const dummyContent = 'adsu87f6t tgzuhiasdjoufgz67';

describe('TwoColumnLayout', () => {
  afterEach(cleanup);

  it('displays children', () => {
    const { getByText } = render(
      <TwoColumnLayout>{dummyContent}</TwoColumnLayout>,
    );
    const element = getByText(dummyContent);
    expect(element).toBeInTheDocument();
  });
});
