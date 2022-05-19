import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Button from '../components/atoms/Button';
import Upload from '../components/atoms/Upload';
import styles from './styles';
import UserInfo from '../components/atoms/UserInfo';

export const User = ({navigation}) => {
  const [userInfo, setUserInfo] = useState('');

  //Method to signOut
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  useEffect(() => {
    const current = auth().currentUser;
    firestore()
      .collection('Users')
      // Filter results
      .where('uid', '==', current.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setUserInfo(documentSnapshot.data());
        });
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Información de usuario</Text>
      <Upload />
      <ScrollView style={styles.userInfoContainer}>
        <UserInfo text="Correo: " info={userInfo.correo} />
        <UserInfo text="Username: " info={userInfo.nick} />
        <UserInfo text="Numero de cuenta: " info={userInfo.numeroCuenta} />
        <UserInfo text="Nombre: " info={userInfo.nombre} />
      </ScrollView>
      <Text style={styles.title}>Materiales</Text>
      <Button text="Cerrar sesion" onPress={handleLogout} />
    </SafeAreaView>
  );
};
