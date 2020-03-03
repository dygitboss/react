import React, { FC } from 'react';

import styles from './ModalContent.module.scss';

/**
 * Scrollable content container to be used in combination with Modal
 */
const ModalContent: FC = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

export default ModalContent;
