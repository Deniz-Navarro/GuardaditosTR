import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomModal from '../components/atoms/CustomModal';
import HorizontalList from '../components/molecules/HorizontalList';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

export const Room = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [aulas, setAulas] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    const current = auth().currentUser;
    firestore()
      .collection('Aulas')
      // Filter results
      .where('users', 'array-contains', current.uid)
      .get()
      .then(querySnapshot => {
        const aulasAux = [];
        querySnapshot.forEach(documentSnapshot => {
          aulasAux.push(documentSnapshot.data());
        });
        isFocused && setAulas(aulasAux);
      });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Aulas</Text>
        <CustomButtom name="navicon" size={40} onPress={toggleModal} />
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        txt1="Ingresar a sala"
        txt2="Crear nueva sala"
        onPress={toggleModal}
        onPress2={() => {
          toggleModal();
          navigation.navigate('RoomForm');
        }}
      />
      {aulas.length > 0 ? (
        <HorizontalList data={aulas} navigation={navigation} />
      ) : (
        <ActivityIndicator size="large" color="#5A813F" />
      )}
    </SafeAreaView>
  );
};
