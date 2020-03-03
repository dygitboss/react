import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Label.module.scss';

interface Props {
  title: string;

  /**
   * Position of label relative to children (above child, to the right of child, ...)
   */
  position?: 'above' | 'right';
}

const Label: FC<Props> = ({ children, title, position }) => {
  const text = (
    <div className={styles.label}>
      {title}
    </div>
  );

  return (
    <label className={classNames(styles.container, { [styles.right]: position === 'right' })}>
      {text}
      {children}
    </label>
  );
};

export default Label;
