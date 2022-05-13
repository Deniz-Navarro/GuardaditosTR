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

export const User = ({navigation}) => {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('correo', '==', 'ldeniz1@ucol.mx')
      .get()
      .then(querySnapshot => {
        setUserInfo(querySnapshot.docs);
      });
  };
  getUserInfo();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Informacion de usuario</Text>
      <FlatList
        data={userInfo}
        renderItem={({item}) => (
          <View>
            <View style={styles.viewImage}>
              <Image style={styles.imageUser} source={LogoImg} />
            </View>
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
  title: {
    fontSize: 25,
    fontFamily: 'Arial',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
