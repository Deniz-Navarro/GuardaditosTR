import React from 'react';
import {View, Text} from 'react-native';

const TextTitle = props => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'Arial',
          marginBottom: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default TextTitle;
