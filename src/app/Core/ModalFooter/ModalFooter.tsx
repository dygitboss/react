import React, { FC } from 'react';

import styles from './ModalFooter.module.scss';

/**
 * Modal Footer (part of Modal)
 */
const ModalFooter: FC = ({ children }) => (
  <div className={styles.footer}>
    {children}
  </div>
);

export default ModalFooter;
