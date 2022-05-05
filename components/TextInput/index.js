import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';

const InputContainer = props => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});
