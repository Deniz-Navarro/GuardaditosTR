import React, {useState} from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Pressable,
} from 'react-native';

const InputContainer = (props) => {
    return(
        <View>
          <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secure} onChangeText={props.onChangeText} />
        </View>
      );
}

export default InputContainer;

const styles = StyleSheet.create({
    input: {
      height: 55,
      marginTop: 15,
      backgroundColor: "white",
      borderRadius: 10,
      borderColor: 'grey',
      padding: 10,
      fontSize: 20,
    },
  });