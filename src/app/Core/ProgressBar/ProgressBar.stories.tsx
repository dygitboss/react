import React from 'react';

import ProgressBar from './ProgressBar';
import '../../App/App.module.scss';

export default {
  component: ProgressBar,
  title: 'Progress Bar',
};

export const blue = () => <div style={{ padding: 30 }}><ProgressBar value={25} /></div>;

export const green = () => <div style={{ padding: 30 }}><ProgressBar value={25} color='green' /></div>;

export const orange = () => <div style={{ padding: 30 }}><ProgressBar value={25} color='orange' /></div>;

export const red = () => <div style={{ padding: 30 }}><ProgressBar value={25} color='red' /></div>;
