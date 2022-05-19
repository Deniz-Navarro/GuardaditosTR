import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};
