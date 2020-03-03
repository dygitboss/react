import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface Props {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'big';

  /**
   * Let button take full width of parent. Default: false
   */
  fillWidth?: boolean;

  /**
   * swap colors of text and background. Default: false
   */
  inverse?: boolean;

  /**
   * Register callback for click event
   */
  onClick?: () => void;
}

/**
 * Simple Button encapsulating all design variations
 */
const Button: FC<Props> = ({
  children, inverse, onClick, fillWidth, type = 'button', size = 'normal',
}) => {
  const classes = classNames(
    styles.button,
    styles[size],
    { [styles.inverse]: inverse, [styles.fullWidth]: fillWidth },
  );

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
