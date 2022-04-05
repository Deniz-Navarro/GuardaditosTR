import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Guardaditos</Text>
      <Text>By TimRocket</Text>
      <Image
          style={styles.tinyLogo}
          source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/3566/3566826.png',
          }}
      />
      <Button 
      text = "¡Comenzar!" 
      onPress = { () => { navigation.navigate('Login') }}
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
    backgroundColor: '#9FC3D8',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginTop: 15,
    marginBottom: 50,
  },
});
