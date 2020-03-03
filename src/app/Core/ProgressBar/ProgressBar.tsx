import React, { FC, useMemo } from 'react';
import classNames from 'classnames';

import styles from './ProgressBar.module.scss';

interface Props {
  /**
   * Desired progress bar height in px
   */
  height?: number;

  /**
   * Progress value within 0..100 range
   */
  value: number;

  /**
   * Progress bar color
   */
  color?: 'orange' | 'blue' | 'green' | 'red'
}

const ProgressBar: FC<Props> = ({ color, value, height }) => {
  const colorClass = useMemo(() => {
    switch (color) {
      case 'blue': return styles.blue;
      case 'orange': return styles.orange;
      case 'red': return styles.red;
      case 'green': return styles.green;
      default: return styles.blue;
    }
  }, [color]);

  return (
    <div className={classNames(styles.wrapper, colorClass)} style={{ height: `${height}px` }} role='progressbar'>
      <div className={styles.bar} style={{ width: `${value}%` }} />
    </div>
  );
};

ProgressBar.defaultProps = {
  color: 'blue',
  height: 4,
};

export default ProgressBar;
