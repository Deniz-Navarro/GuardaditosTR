import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomModal from '../components/atoms/CustomModal';
import ItemRoom from '../components/atoms/itemRoom';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const aulas = new Array();

export const Room = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [aula, setAula] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const current = auth().currentUser;
    firestore()
      .collection('Aulas')
      // Filter results
      .where('users', 'array-contains', current.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setAula(documentSnapshot.data());
        });
      });
  }, []);
  aulas.push(aula);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Aulas</Text>
        <CustomButtom name="navicon" size={40} onPress={toggleModal} />
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        onPress={toggleModal}
        onPress2={() => {
          toggleModal();
          navigation.navigate('RoomForm');
        }}
      />
      <FlatList
        data={aulas}
        renderItem={({item}) => (
          <View>
            <Text>ID: {item.codigo}</Text>
            <Text>Nombre: {item.nombre}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
