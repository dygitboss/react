import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Key } from 'ts-key-enum';

import Modal from './Modal';

const dummyText = 'Some Modal text';
const noop = () => {};

describe('Modal', () => {
  afterEach(cleanup);

  it('display text', () => {
    const { getByText } = render(<Modal isOpen onClose={noop}>{dummyText}</Modal>);
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });

  it('display nothing when closed', () => {
    const { queryByText } = render(<Modal isOpen={false} onClose={noop}>{dummyText}</Modal>);
    const element = queryByText(dummyText);
    expect(element).not.toBeInTheDocument();
  });

  // TODO: figure out why event is not fired
  it.skip('pressing esc calls onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen onClose={onClose}>{dummyText}</Modal>);
    const element = getByTestId('modal-overlay');

    fireEvent.keyPress(element, {
      key: Key.Escape, code: 27, charCode: 27,
    });
    expect(onClose).toHaveBeenCalled();
  });

  it('clicking on overlay calls onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen onClose={onClose}>{dummyText}</Modal>);
    const element = getByTestId('modal-overlay');

    fireEvent.click(element);
    expect(onClose).toHaveBeenCalled();
  });

  it('clicking inside modal should not call onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen onClose={onClose}>{dummyText}</Modal>);
    const element = getByTestId('modal-container');

    fireEvent.click(element);
    expect(onClose).not.toHaveBeenCalled();
  });
});
