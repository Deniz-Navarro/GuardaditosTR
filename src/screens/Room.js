import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomModal from '../components/atoms/CustomModal';
import CustomModalInput from '../components/atoms/CustomModalInput';
import HorizontalList from '../components/molecules/HorizontalList';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SearchBar from '../components/atoms/SearchBar';
import {useIsFocused} from '@react-navigation/native';

export const Room = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalInputVisible, setModalInputVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [aulas, setAulas] = useState([]);
  const isEmpty = useRef(true);
  const isFocused = useIsFocused();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalInput = () => {
    setModalInputVisible(!isModalInputVisible);
  };

  const submitCode = async (code, setCode) => {
    setLoading(true);
    const currentUser = auth().currentUser;
    const uidArrayUnion = firestore.FieldValue.arrayUnion(currentUser.uid);
    const dataAulas = await firestore()
      .collection('Aulas')
      .where('codigo', '==', code)
      .get();
    let docUid;
    dataAulas.forEach(a => (docUid = a.id));
    await firestore()
      .collection('Aulas')
      .doc(docUid)
      .update({users: uidArrayUnion});
    setModalInputVisible(false);
    setCode('');
    setAulasFiltered();
    setLoading(false);
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
      isEmpty.current = false;
    });
    setLoading(false);
    return aulasAux;
  };

  const setAulasFiltered = async () => {
    setLoading(true);
    const aulasAux = await getAulas();
    const aulasAuxFiltered = aulasAux.filter(aula => {
      const nombreLowCase = aula.nombre.toLowerCase();
      if (nombreLowCase.includes(searchValue.toLowerCase())) {
        return aula;
      }
    });
    isFocused && setAulas(searchValue === '' ? aulasAux : aulasAuxFiltered);
  };

  useEffect(() => {
    setAulasFiltered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isFocused]);

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
        onPress1={() => {
          toggleModal();
          toggleModalInput();
        }}
        onPress2={() => {
          toggleModal();
          navigation.navigate('RoomForm');
        }}
      />
      <CustomModalInput
        isModalVisible={isModalInputVisible}
        txt="Ingresa el código:"
        onPress={toggleModalInput}
        onPress1={submitCode}
      />
      <HorizontalList
        data={aulas}
        navigation={navigation}
        isLoading={isLoading}
        onRefresh={setAulasFiltered}
        isEmpty={isEmpty.current}
      />
    </SafeAreaView>
  );
};
