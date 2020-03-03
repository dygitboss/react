import React from 'react';

import TwoColumnLayout from './TwoColumnLayout';
import '../../App/App.module.scss';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default {
  component: TwoColumnLayout,
  title: 'TwoColumnLayout',
};

export const normal = () => (
  <TwoColumnLayout>
    <Label title='Firstname *'>
      <Input fillWidth name='firstname' />
    </Label>
    <Label title='Lastname *'>
      <Input fillWidth name='lastname' />
    </Label>
    <Label title='E-Mail *'>
      <Input fillWidth name='email' type='email' />
    </Label>
    <Label title='Phone Number'>
      <Input fillWidth name='phone' />
    </Label>
    <Label title='Another random field'>
      <Input fillWidth name='Another random field' />
    </Label>
    <Button type='submit'>Submit</Button>
  </TwoColumnLayout>
);

export const bigGap = () => (
  <TwoColumnLayout size='big'>
    <Label title='Firstname *'>
      <Input fillWidth name='firstname' />
    </Label>
    <Label title='Lastname *'>
      <Input fillWidth name='lastname' />
    </Label>
    <Label title='E-Mail *'>
      <Input fillWidth name='email' type='email' />
    </Label>
    <Label title='Phone Number'>
      <Input fillWidth name='phone' />
    </Label>
    <Label title='Another random field'>
      <Input fillWidth name='Another random field' />
    </Label>
    <Button type='submit'>Submit</Button>
  </TwoColumnLayout>
);
