import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Btn = props => {
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

export default Btn;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#f9f9f9',
  },
});
