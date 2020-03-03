import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ModalFooter from './ModalFooter';

const dummyText = 'Some ModalFooter text';

describe('ModalFooter', () => {
  afterEach(cleanup);

  it('display text', () => {
    const { getByText } = render(<ModalFooter>{dummyText}</ModalFooter>);
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });
});
