import React from 'react';
import {Text, View} from 'react-native';
import userInfoStyles from './userInfoStyles';

const UserInfo = props => {
  const {text, info} = props;
  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.text1}>{text}</Text>
      <Text style={userInfoStyles.text2}>{info}</Text>
    </View>
  );
};

export default UserInfo;
