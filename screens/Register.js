import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import InputContainer from "../components/TextInput";
import Button from "../components/Button";
import auth from '@react-native-firebase/auth';

const onSubmit = (mail, user, pass, pass2, navigation) => {
  if(mail.endsWith('@ucol.mx')){
    if (pass == pass2) {
      auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        console.log('Usuario creado con exito');
        navigation.reset({
          index: 0,
          routes: [
            {name: 'Home'}
          ]
        });
      })
      .catch(error => console.log(error));
      }else{
        alert("Las contraseñas no coinciden");
      }
  }else{
    alert("Este correo no pertenece a la udc")
  }
  
};

export const Register = ({navigation}) =>{
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [pass,setPass] = useState('');
    const [confirm,setConfirm] = useState('');

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
          <Text style={styles.subtitle}>— REGISTRO —</Text>
          <InputContainer placeholder="Correo electronico"
          value={email}
          onChangeText={a => {
            setEmail(a);
          }}
          />
          <InputContainer placeholder="Nombre de usuario"
          value={username}
          onChangeText={a => {
            setUsername(a);
          }}
          />
          <InputContainer placeholder="Contraseña" 
          secure
          value={pass}
          onChangeText={a => {
            setPass(a);
          }}
          />
          <InputContainer placeholder="Confirmar contraseña" 
          secure
          value={confirm}
          onChangeText={a => {
            setConfirm(a);
          }}
          />
          <Button 
          text = "Registrarse"
          onPress = {() => onSubmit(email,username,pass,confirm,navigation)}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#9FC3D8',
      },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
      },
      subtitle:{
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
        width: 60,
        height: 60,
        marginBottom: 20,
      },
});