import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import botonStyle from './butonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = props => {
  const {onPress, text, styles, icon} = props;
  return (
    <TouchableOpacity
      style={styles ? styles : botonStyle.buttonContainer}
      onPress={onPress}>
      {icon && <Icon name={icon} size={24} color="#FFF" />}
      <Text style={botonStyle.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
