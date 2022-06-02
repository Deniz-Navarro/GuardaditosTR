import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Alert} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import LogoImg from '../assets/images/LogoUDC2.png';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const onSubmitGoogle = (mail, user, accountNumber, fullName, navigation) => {
  const current = auth().currentUser;
  addUserInfo(mail, user, accountNumber, fullName, current.uid);
  navigation.reset({
    index: 0,
    routes: [{name: 'Menu'}],
  });
};
const onSubmit = (
  mail,
  user,
  accountNumber,
  fullName,
  pass,
  pass2,
  navigation,
  googleSignUp,
) => {
  if (googleSignUp) {
    return onSubmitGoogle(mail, user, accountNumber, fullName, navigation);
  }
  if (pass === pass2) {
    if (mail.endsWith('@ucol.mx')) {
      auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then(() => {
          console.log('Usuario creado con exito');
          const current = auth().currentUser;
          addUserInfo(mail, user, accountNumber, fullName, current.uid);
          navigation.reset({
            index: 0,
            routes: [{name: 'Menu'}],
          });
        })
        .catch(error => console.log(error));
    } else {
      Alert.alert('Este correo no pertenece a la UDC');
    }
  }
};

const addUserInfo = (email, user, accountNumber, fullName, uid) => {
  firestore()
    .collection('Users')
    .add({
      numeroCuenta: accountNumber,
      nombre: fullName,
      correo: email,
      nick: user,
      uid: uid,
    })
    .then(() => {
      console.log('Usuario agregado!');
    });
};

export const Register = ({navigation, route}) => {
  const googleSignUp = route.params?.googleSignUp || false;
  const userData = route.params?.userData || null;
  const [email, setEmail] = useState(userData?.email || '');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState(userData?.email || '');
  const [confirm, setConfirm] = useState(userData?.email || '');
  const [accountNumber, setAccountNumber] = useState('');
  const [fullName, setFullName] = useState(userData?.fullName || '');

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
        disabled={googleSignUp}
      />
      <InputContainer
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={a => {
          setFullName(a);
        }}
        disabled={googleSignUp}
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
        keyboardType="numeric"
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
        disabled={googleSignUp}
      />
      <InputContainer
        placeholder="Confirmar contraseña"
        secure
        value={confirm}
        onChangeText={a => {
          setConfirm(a);
        }}
        disabled={googleSignUp}
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
            googleSignUp,
          )
        }
      />
    </ScrollView>
  );
};
