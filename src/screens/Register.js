import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import LogoImg from '../assets/images/LogoUDC2.png';

const onSubmit = (mail, user, pass, pass2, navigation) => {
  if (pass == pass2) {
    auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        console.log('Usuario creado con exito');
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      })
      .catch(error => console.log(error));
  }
};

const Container = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <Container>
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
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={a => {
          setUsername(a);
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
        onPress={() => onSubmit(email, username, pass, confirm, navigation)}
      />
    </Container>
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
    marginTop: 20,
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
