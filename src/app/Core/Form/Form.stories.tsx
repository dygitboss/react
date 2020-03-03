import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

import '../../App/App.module.scss';
import Input from '../Input/Input';
import TwoColumnLayout from '../TwoColumnLayout/TwoColumnLayout';
import Label from '../Label/Label';
import Button from '../Button/Button';

export default {
  title: 'Form',
};

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const mapSubmitHandler = useCallback((data: any) => onSubmit(data), [onSubmit]);

  return (
    <form onSubmit={handleSubmit(mapSubmitHandler)}>
      <TwoColumnLayout>
        <Label title='Firstname *'>
          <Input fillWidth name='firstname' ref={register({ required: true })} />
          <div>{errors.firstname && 'First name is required.'}</div>
        </Label>
        <Label title='Lastname *'>
          <Input fillWidth name='lastname' ref={register({ required: true })} />
          <div>{errors.lastname && 'Last name is required.'}</div>
        </Label>
        <Label title='E-Mail *'>
          <Input fillWidth name='email' type='email' ref={register({ required: true })} />
          <div>{errors.email && 'E-Mail is required.'}</div>
        </Label>
        <Label title='Phone Number'>
          <Input fillWidth name='phone' ref={register({})} />
        </Label>
        <Button type='submit'>Submit</Button>
      </TwoColumnLayout>
    </form>
  );
};

export const normal = () => <Form onSubmit={action('submit')} />;
