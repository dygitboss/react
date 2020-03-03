import React, { FC } from 'react';

import styles from './ModalHeader.module.scss';
import CrossIcon from '../Icons/CrossIcon';

interface Props {
  onClose: () => void;
}

/**
 * Title bar for Modal component.
 */
const ModalHeader: FC<Props> = ({ children, onClose }) => (
  <div className={styles.header}>
    {children}
    <button
      className={styles.crossButton}
      type='button'
      onClick={onClose}
      data-testid='modal-cross-close-button'
    >
      <CrossIcon />
    </button>
  </div>
);

export default ModalHeader;
