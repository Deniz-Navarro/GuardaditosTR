import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Home = ({navigation}) => {
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button text="Cerrar sesion" onPress={handleLogout} />
    </SafeAreaView>
  );
};
