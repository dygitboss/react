import React, {
  FC, useCallback, MouseEvent, useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { Key } from 'ts-key-enum';

import styles from './Modal.module.scss';
import useKeyPress from '../../../utils/hooks/useKeyPress';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Simple modal, should be used together with ModalContent, ModalHeader and optionally ModalFooter
 */
const Modal: FC<Props> = ({
  children, isOpen, onClose,
}) => {
  const isEscPressed = useKeyPress(Key.Escape);
  const handleOverlayClick = useCallback(
    (event: MouseEvent) => event.target === event.currentTarget && onClose(),
    [onClose],
  );

  useEffect(
    () => { if (isOpen && isEscPressed) { onClose(); } },
    [isEscPressed, isOpen, onClose],
  );


  const content = isOpen && (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role='presentation'
      data-testid='modal-overlay'
    >
      <div className={styles.container} data-testid='modal-container'>
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
