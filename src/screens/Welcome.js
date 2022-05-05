import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/atoms/Button';
import LogoImg from '../assets/images/LogoUDC2.png';

export const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Guardaditos</Text>
      <Text>By TimRocket</Text>
      <Image style={styles.tinyLogo} source={LogoImg} />
      <Button
        text="¡Comenzar!"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5D8A4',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
});
