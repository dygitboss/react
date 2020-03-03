/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Label from './Label';
import '../../App/App.module.scss';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

export default {
  component: Label,
  title: 'Label',
};

export const normal = () => <Label title='Hello Label' />;

export const withInput = () => (
  <Label title='Firstname *'>
    <Input name='firstname' />
  </Label>
);

export const toTheRight = () => (
  <Checkbox label='Agree with terms of use' />
);
