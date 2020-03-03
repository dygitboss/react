import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/App.module.scss';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => <Checkbox onChange={action('changed')} />;

export const withLabel = () => (
  <Checkbox label='Customer Accepts Marketing' />
);

export const readOnly = () => (
  <Checkbox disabled defaultValue label='Customer Accepts Marketing' />
);
