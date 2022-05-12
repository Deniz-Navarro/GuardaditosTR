import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import LogoImg from '../assets/images/LogoUDC2.png';
import firestore from '@react-native-firebase/firestore';

const onSubmit = (
  mail,
  user,
  accountNumber,
  fullName,
  pass,
  pass2,
  navigation,
) => {
  if (pass === pass2) {
    auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        console.log('Usuario creado con exito');
        addUserInfo(mail, user, accountNumber, fullName);
        navigation.reset({
          index: 0,
          routes: [{name: 'Menu'}],
        });
      })
      .catch(error => console.log(error));
  }
};

const addUserInfo = (email, user, accountNumber, fullName) => {
  firestore()
    .collection('Users')
    .add({
      numeroCuenta: accountNumber,
      nombre: fullName,
      correo: email,
      nick: user,
    })
    .then(() => {
      console.log('Usuario agregado!');
    });
};

export const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [fullName, setFullName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Guardaditos TR</Text>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.tinyLogo} source={LogoImg} />
      </View>
      <Text style={styles.subtitle}>— REGISTRO —</Text>
      <InputContainer
        placeholder="Correo electronico"
        value={email}
        onChangeText={a => {
          setEmail(a);
        }}
      />
      <InputContainer
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={a => {
          setFullName(a);
        }}
      />
      <InputContainer
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={a => {
          setUsername(a);
        }}
      />
      <InputContainer
        placeholder="Número de cuenta"
        value={accountNumber}
        onChangeText={a => {
          setAccountNumber(a);
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
      <InputContainer
        placeholder="Confirmar contraseña"
        secure
        value={confirm}
        onChangeText={a => {
          setConfirm(a);
        }}
      />
      <Button
        text="Registrarse"
        onPress={() =>
          onSubmit(
            email,
            username,
            accountNumber,
            fullName,
            pass,
            confirm,
            navigation,
          )
        }
      />
    </ScrollView>
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
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgot: {
    textAlign: 'right',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
