import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Link = props => {
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

export default Link;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'right',
    marginBottom: 40,
    fontWeight: 'bold',
  },
});
