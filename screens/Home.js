import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';

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
      <Button text="Cerrar sesion" onPress={handleLogout} />
    </SafeAreaView>
  );
};
