import React from 'react';
import { action } from '@storybook/addon-actions';

import '../../App/App.module.scss';
import Modal from './Modal';
import TwoColumnLayout from '../TwoColumnLayout/TwoColumnLayout';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalContent from '../ModalContent/ModalContent';

export default {
  component: Modal,
  title: 'Modal',
};

export const simple = () => (
  <Modal isOpen onClose={action('close')}>
    <ModalHeader onClose={action('close')}>Create a Customer</ModalHeader>
    <TwoColumnLayout>
      <Label title='Firstname *'>
        <Input fillWidth name='firstname' />
      </Label>
      <Label title='Lastname *'>
        <Input fillWidth name='lastname' />
      </Label>
    </TwoColumnLayout>
  </Modal>
);

export const withFooter = () => (
  <Modal isOpen onClose={action('close')}>
    <ModalHeader onClose={action('close')}>Create a Customer</ModalHeader>
    <ModalContent>
      <TwoColumnLayout>
        <Label title='Firstname *'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
      </TwoColumnLayout>
    </ModalContent>
    <ModalFooter>
      <Checkbox label='Customer Accepts Marketing' />
      <Button type='submit' size='big'>Create</Button>
    </ModalFooter>
  </Modal>
);

export const withScrollbarAndFooter = () => (
  <Modal isOpen onClose={action('close')}>
    <ModalHeader onClose={action('close')}>Create a Customer</ModalHeader>
    <ModalContent>
      <TwoColumnLayout>
        <Label title='Firstname 1'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 2'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 3'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 4'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 5'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 6'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 7'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
        <Label title='Firstname 8'>
          <Input fillWidth name='firstname' />
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' />
        </Label>
      </TwoColumnLayout>
    </ModalContent>
    <ModalFooter>
      <Checkbox label='Customer Accepts Marketing' />
      <Button type='submit' size='big'>Create</Button>
    </ModalFooter>
  </Modal>
);
