import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Guardaditos</Text>
      <Text>By TimRocket</Text>
      <Button 
      text = "¡Comenzar!" 
      onPress = { () => { navigation.navigate('Home') }}
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
});

export default Welcome;
