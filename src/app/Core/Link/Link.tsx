import React, { FC } from 'react';
import { Link as RouterLink, LinkProps, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import HoverIcon from '../Icons/HoverIcon';
import useHover from '../../../utils/hooks/useHover';
import styles from './Link.module.scss';
import Routes from '../../../config/routes';

interface Props extends LinkProps {
  icon?: HoverIcon;
  activeClassName?: string;
  className?: string;
  to: Routes;
}

const Link: FC<Props> = (props) => {
  const {
    children, className, activeClassName, to, icon: Icon, ...otherProps
  } = props;
  const location = useLocation();
  const [hoverRef, isHovered] = useHover<RouterLink>();
  const isActive = isHovered || location.pathname === to;
  const renderedIcon = Icon && (
    <div className={styles.iconContainer}>
      <Icon isHovered={isActive} />
    </div>
  );

  return (
    <RouterLink
      ref={hoverRef}
      className={classNames(styles.link, className, { [activeClassName || '']: isActive })}
      to={to}
      {...otherProps}
    >
      {renderedIcon}
      <div className={styles.contentContainer}>
        {children}
      </div>
    </RouterLink>
  );
};

export default Link;
