import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ModalHeader from './ModalHeader';

const dummyText = 'Some ModalHeader text';

describe('ModalHeader', () => {
  afterEach(cleanup);

  it('display text', () => {
    const { getByText } = render(<ModalHeader onClose={() => {}}>{dummyText}</ModalHeader>);
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });

  it('handle onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<ModalHeader onClose={onClose}>{dummyText}</ModalHeader>);
    const element = getByTestId('modal-cross-close-button');
    fireEvent.click(element);
    expect(onClose).toHaveBeenCalled();
  });
});
