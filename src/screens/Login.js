import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import LogoImg from '../assets/images/LogoUDC2.png';
import styles from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '95653926946-3vlr2lqcf2cph3graamr9em2mh6vlgdp.apps.googleusercontent.com',
});

const navigateToHome = navigation =>
  navigation.reset({
    index: 0,
    routes: [{name: 'Menu'}],
  });

const onGoogleButtonPress = async navigation => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const authAux = await auth().signInWithCredential(googleCredential);
  if (authAux.additionalUserInfo.profile.hd === 'ucol.mx') {
    if (authAux.additionalUserInfo.isNewUser) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Register', params: {googleSignUp: true}}],
      });
    }
    return navigateToHome(navigation);
  }
};

const authUser = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigateToHome(navigation))
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
      <Button
        text="Iniciar sesion con Google"
        onPress={() => onGoogleButtonPress(navigation)}
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
