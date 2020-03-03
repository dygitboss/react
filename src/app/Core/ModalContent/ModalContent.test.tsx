import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ModalContent from './ModalContent';

const dummyText = 'Some ModalContent text';

describe('ModalContent', () => {
  afterEach(cleanup);

  it('display text', () => {
    const { getByText } = render(<ModalContent>{dummyText}</ModalContent>);
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });
});
