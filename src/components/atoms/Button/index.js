import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import botonStyle from './butonStyles';

const Button = props => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={botonStyle.buttonContainer} onPress={onPress}>
      <Text style={botonStyle.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
