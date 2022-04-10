import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import InputContainer from "../components/TextInput";
import Button from "../components/Button";
import auth from '@react-native-firebase/auth';

const authUser = (email, password, navigation) =>{
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [
          {name: 'Home'}
        ]
      });
    })
    .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Usuario o contraseña incorrectos');
        }
        console.error(error);
      });
}

export const Login = ({navigation}) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Guardaditos TR</Text>
          <View style={{alignItems: 'center'}}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/3566/3566826.png',
                }}
            />
          </View>
          <InputContainer placeholder="Correo electronico"
          value={email}
          onChangeText={a => { setEmail(a); }}
          />
          <InputContainer placeholder="Contraseña" secure
          value={pass}
          onChangeText={a => { setPass(a); }}
          />
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
          <Button 
          text = "Iniciar sesion"
          onPress = {() => authUser(email,pass,navigation)} 
          />
          <Button 
          text = "Registrarse"
          onPress = { () => { navigation.navigate('Register') }}
          />
        </View>
      );
}

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
        marginTop: 40,
        marginBottom: 40,
      },
      forgot: {
        textAlign: 'right',
        marginBottom: 40,
        fontWeight: 'bold',
      },
      tinyLogo: {
        width: 60,
        height: 60,
        marginBottom: 20,
      },
});

