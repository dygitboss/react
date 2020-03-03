import React, {
  FC, forwardRef, Ref, useState, useCallback,
} from 'react';

import styles from './Checkbox.module.scss';
import CheckboxIcon from '../Icons/CheckboxIcon';
import Label from '../Label/Label';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label displayed next to checkbox
   */
  label?: string;

  /**
   * Register callback for change event
   */
  onChange?: (checked: boolean) => void;

  /**
   * Checkbox checked state. Default: false
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Checkbox: FC<Props> = forwardRef((props, ref) => {
  const {
    defaultValue, onChange, disabled, label, ...otherProps
  } = props;
  const [isChecked, setChecked] = useState(!!defaultValue);
  const toggle = useCallback(
    () => {
      if (!disabled) {
        setChecked(!isChecked);

        if (onChange) {
          onChange(!isChecked);
        }
      }
    },
    [isChecked, disabled, onChange],
  );

  return (
    <Label title={label || ''} position='right'>
      <div className={styles.container} role='presentation' data-testid='checkbox'>
        <CheckboxIcon isActive={isChecked} />
        <input
          type='checkbox'
          className={styles.input}
          ref={ref}
          checked={isChecked}
          onChange={toggle}
          {...otherProps}
        />
      </div>
    </Label>
  );
});

export default Checkbox;
