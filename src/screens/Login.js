import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import LogoImg from '../assets/images/LogoUDC2.png';

const authUser = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Menu'}],
      });
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Usuario o contraseña incorrectos');
      }
      console.error(error);
    });
};

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('ldeniz1@ucol.mx');
  const [pass, setPass] = useState('123456');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guardaditos TR</Text>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.tinyLogo} source={LogoImg} />
      </View>
      <InputContainer
        placeholder="Correo electronico"
        value={email}
        onChangeText={a => {
          setEmail(a);
        }}
      />
      <InputContainer
        placeholder="Contraseña"
        secure
        value={pass}
        onChangeText={a => {
          setPass(a);
        }}
      />
      <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      <Button
        text="Iniciar sesion"
        onPress={() => authUser(email, pass, navigation)}
      />
      <Text
        style={styles.registro}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        No tienes una cuenta? Registrarse
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#C5D8A4',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  forgot: {
    textAlign: 'right',
    marginBottom: 40,
    fontWeight: 'bold',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  registro: {
    textAlign: 'center',
    marginTop: 8,
    color: '#4682B4',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
