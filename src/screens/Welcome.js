import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import LogoImg from '../assets/images/LogoUDC2.png';
import styles from './styles';

export const Welcome = ({navigation}) => {
  const [cambiar, setCambiar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCambiar(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (cambiar) {
      navigation.replace('Login');
    }
  }, [cambiar, navigation]);

  return (
    <SafeAreaView style={styles.containerWelcome}>
      <Text style={styles.title}>Guardaditos</Text>
      <Text>By TimRocket</Text>
      <Image style={styles.tinyLogo} source={LogoImg} />
    </SafeAreaView>
  );
};
