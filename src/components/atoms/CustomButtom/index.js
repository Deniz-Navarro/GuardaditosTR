import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';

const CustomButtom = props => {
  const {name, size, color, onPress, Ionicons} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {Ionicons ? (
        <Icon2 name={name} size={size} color={color} />
      ) : (
        <Icon name={name} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButtom;
