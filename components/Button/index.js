import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity
      style = {styles.buttonContainer}
      onPress = {onPress}
    >
      <Text 
      style={styles.buttonText}
      >
        { text }
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#6094A4',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 20,
    textAlign: 'center',
  },
});
