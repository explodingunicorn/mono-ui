import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
}

export const spacerButtonGroup = () => {
  return (<ButtonGroup variant="spaced">
    <Button>Hi</Button>
    <Button variant='secondary'>Hello</Button>
  </ButtonGroup>)
}

export const compactButtonGroup = () => {
  return (
    <ButtonGroup variant='compact'>
      <Button inverted>Hello</Button>
      <Button>Button</Button>
      <Button inverted>Group</Button>
    </ButtonGroup>
  )
}