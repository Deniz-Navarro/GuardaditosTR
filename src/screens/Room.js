import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomModal from '../components/atoms/CustomModal';
import HorizontalList from '../components/molecules/HorizontalList';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SearchBar from '../components/atoms/SearchBar';

export const Room = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [aulas, setAulas] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const getAulas = async () => {
    const current = auth().currentUser;
    const data = await firestore()
      .collection('Aulas')
      .where('users', 'array-contains', current.uid)
      .get();
    const aulasAux = [];
    data.forEach(documentSnapshot => {
      aulasAux.push(documentSnapshot.data());
    });
    return aulasAux;
  };

  const setAulasFiltered = async () => {
    const aulasAux = await getAulas();
    const aulasAuxFiltered = aulasAux.filter(aula => {
      const nombreLowCase = aula.nombre.toLowerCase();
      if (nombreLowCase.includes(searchValue.toLowerCase())) {
        return aula;
      }
    });
    setAulas(searchValue === '' ? aulasAux : aulasAuxFiltered);
  };

  useEffect(() => {
    setAulasFiltered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Aulas</Text>
        <CustomButtom name="navicon" size={40} onPress={toggleModal} />
      </View>
      <SearchBar value={searchValue} setValue={setSearchValue} />
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
