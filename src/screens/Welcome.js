import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import Button from '../components/atoms/Button';
import LogoImg from '../assets/images/LogoUDC2.png';
import styles from './styles';

export const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containerWelcome}>
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
