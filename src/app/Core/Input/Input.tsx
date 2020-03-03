import React, { FC, forwardRef, Ref } from 'react';

import classNames from 'classnames';
import styles from './Input.module.scss';

interface Props {
  /**
   * Input value type
   */
  type?: 'text' | 'number' | 'email' | 'password';

  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Placeholder to show when empty
   */
  placeholder?: string;

  /**
   * Register callback for change event
   */
  onChange?: () => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Stretch to max width. Default: false
   */
  fillWidth?: boolean;

  /**
   * Current value of input
   */
  value?: string;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Input: FC<Props> = forwardRef((props, ref) => {
  const { fillWidth, ...otherProps } = props;

  return (
    <input
      className={classNames(styles.input, { [styles.fillWidth]: fillWidth })}
      ref={ref}
      {...otherProps}
    />
  );
});

export default Input;
