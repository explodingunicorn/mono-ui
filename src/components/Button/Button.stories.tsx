import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
}

export const primaryButton = () => {
  return <Button variant="primary">Stuff</Button>;
};

export const secondaryButton = () => {
  return <Button variant="secondary">Stuff</Button>;
};

export const primaryButtonInverted = () => {
  return <Button inverted>Things</Button>
}