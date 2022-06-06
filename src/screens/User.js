import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomButtom from '../components/atoms/CustomButtom';
import Upload from '../components/atoms/Upload';
import styles from './styles';
import UserInfo from '../components/atoms/UserInfo';
import {useIsFocused} from '@react-navigation/native';
import ItemProduct from '../components/atoms/ItemProduct';

export const User = ({navigation}) => {
  const [userInfo, setUserInfo] = useState('');
  const [elementos, setElementos] = useState('');
  const isEmpty = useRef(true);
  const current = auth().currentUser;
  const isFocused = useIsFocused();
  //Method to signOut
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  useEffect(() => {
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
  }, [current]);

  useEffect(() => {
    firestore()
      .collection('Elementos')
      // Filter results
      .where('solicitado', '==', current.uid)
      .get()
      .then(querySnapshot => {
        const elementosAux = [];
        querySnapshot.forEach(documentSnapshot => {
          elementosAux.push(documentSnapshot.data());
          isEmpty.current = false;
        });
        isFocused && setElementos(elementosAux);
      });
  }, [current, isFocused]);

  return (
    <ScrollView style={styles.scrollcontainer}>
      <View>
        <Text style={styles.title}>Información de usuario</Text>
        <Upload id={current.uid} carpeta="users/" />
        <View style={styles.containerInfo}>
          <UserInfo text="Nombre: " info={userInfo.nombre} />
          <UserInfo text="Username: " info={userInfo.nick} />
          <UserInfo text="Correo: " info={userInfo.correo} />
          <UserInfo text="Numero de cuenta: " info={userInfo.numeroCuenta} />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Materiales solicitados</Text>
        {elementos ? (
          <ScrollView horizontal={true} style={{flexGrow: 0, height: 100}}>
            {elementos.map((item, key, index) => (
              <ItemProduct
                key={item.clave}
                title={item.nombre}
                cantidad={item.cantidad}
                text={item.detalle}
                onPress={() =>
                  navigation.navigate('HomeProducts', {
                    clave: item.clave,
                  })
                }
              />
            ))}
          </ScrollView>
        ) : null}
      </View>
      <View style={styles.logout}>
        <CustomButtom
          name="log-out"
          size={50}
          onPress={handleLogout}
          Ionicons
        />
        <Text style={styles.textlogout}>Cerrar sesion</Text>
      </View>
    </ScrollView>
  );
};
