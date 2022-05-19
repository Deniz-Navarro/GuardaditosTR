import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import botonStyle from './butonStyles';

const Button = props => {
  const {onPress, text, styles} = props;
  return (
    <TouchableOpacity
      style={styles ? styles : botonStyle.buttonContainer}
      onPress={onPress}>
      <Text style={botonStyle.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
