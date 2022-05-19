import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputContainer = props => {
  const {
    styles,
    placeholder,
    secure,
    onChangeText,
    value,
    keyboardType,
    maxLength,
    multiLine,
    numberOfLines,
  } = props;
  return (
    <View>
      <TextInput
        style={styles ? styles : defaultS.input}
        placeholder={placeholder}
        secureTextEntry={secure}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        multiLine={multiLine}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default InputContainer;

const defaultS = StyleSheet.create({
  input: {
    height: 55,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
  },
});
