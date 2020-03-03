import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Link from './Link';
import '../../App/App.module.scss';
import Routes from '../../../config/routes';

export default {
  component: Link,
  title: 'Link',
};

export const normal = () => (
  <MemoryRouter>
    <Link to={Routes.HOME}>Hello Link</Link>
  </MemoryRouter>
);
