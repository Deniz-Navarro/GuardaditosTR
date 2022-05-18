import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LogoImg from '../assets/images/LogoUDC2.png';
import Button from '../components/atoms/Button';
import TextTitle from '../components/atoms/TextTitle';
import Upload from '../components/atoms/Upload';

export const User = ({navigation}) => {
  const [userInfo, setUserInfo] = useState();
  const current = auth().currentUser;

  //Method to signOut
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  const getUserInfo = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('uid', '==', current.uid)
      .get()
      .then(querySnapshot => {
        setUserInfo(querySnapshot.docs);
      });
  };
  getUserInfo();
  return (
    <SafeAreaView style={styles.container}>
      <TextTitle title="Información de usuario" />
      <Upload />
      <FlatList
        data={userInfo}
        style={{height: 200, flexGrow: 0}}
        renderItem={({item}) => (
          <View>
            <Text style={styles.userInformation}>ID: {item.data().uid}</Text>
            <Text style={styles.userInformation}>
              Nombre: {item.data().nombre}
            </Text>
            <Text style={styles.userInformation}>
              Username: {item.data().nick}
            </Text>
            <Text style={styles.userInformation}>
              Correo: {item.data().correo}
            </Text>
            <Text style={styles.userInformation}>
              Numero de Cuenta: {item.data().numeroCuenta}
            </Text>
          </View>
        )}
      />
      <TextTitle title="Materiales" />
      <Button text="Cerrar sesion" onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#C5D8A4',
  },
  imageUser: {
    width: 140,
    height: 140,
    borderRadius: 180,
  },
  userInformation: {
    fontSize: 18,
    fontFamily: 'Arial',
    marginTop: 10,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
