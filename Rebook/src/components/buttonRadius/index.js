import React from 'react';
import {Button, TextButton} from './styles';

const buttonRadius = props => {
  return (
    <Button onPress={props.onPress}>
      <TextButton>{props.textButton}</TextButton>
    </Button>
  );
};

export default buttonRadius;
