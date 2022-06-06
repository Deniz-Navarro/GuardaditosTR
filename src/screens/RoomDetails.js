import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import CustomModal from '../components/atoms/CustomModal';
import {useIsFocused} from '@react-navigation/native';
import HorizontalList from '../components/molecules/HorizontalList';
import IconPlus from 'react-native-vector-icons/Ionicons';

//hola
import SearchBar from '../components/atoms/SearchBar';

export const RoomDetails = ({route, navigation}) => {
  const {roomCode} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(true);
  const isEmpty = useRef(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [roomInfo, SetRoomInfo] = useState('');
  useEffect(() => {
    firestore()
      .collection('Aulas')
      // Filter results
      .where('codigo', '==', roomCode)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          SetRoomInfo(documentSnapshot.data());
        });
      });
  }, [roomCode]);
  const isFocused = useIsFocused();
  useEffect(() => {
    firestore()
      .collection('Elementos')
      // Filter results
      .where('roomCode', '==', roomCode)
      .get()
      .then(querySnapshot => {
        const aulasAux = [];
        querySnapshot.forEach(documentSnapshot => {
          aulasAux.push(documentSnapshot.data());
          isEmpty.current = false;
        });
        isFocused && setProducts(aulasAux);
      });
  }, [isFocused, roomCode]);
  //hola
  const getProducts = async () => {
    const data = await firestore()
      .collection('Elementos')
      .where('roomCode', '==', roomCode)
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
    const aulasAux = await getProducts();
    const aulasAuxFiltered = aulasAux.filter(aula => {
      const nombreLowCase = aula.nombre.toLowerCase();
      if (nombreLowCase.includes(searchValue.toLowerCase())) {
        return aula;
      }
    });
    isFocused && setProducts(searchValue === '' ? aulasAux : aulasAuxFiltered);
  };

  useEffect(() => {
    setAulasFiltered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isFocused, navigation]);

  //hola2
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header2}>
        <CustomButtom
          name="chevron-left"
          size={50}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title2}>{roomInfo.nombre}</Text>
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        txt1="Agregar producto"
        txt2="Ver usarios"
        onPress={toggleModal}
        onPress1={() => {
          toggleModal();
          navigation.navigate('ProductForm', {
            itemRoom: roomCode,
          });
        }}
      />
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <Text style={styles.subtitle}>
        Codigo de invitacion: {roomInfo.codigo}
      </Text>
      <HorizontalList
        data={products}
        navigation={navigation}
        isLoading={isLoading}
        isProduct
        isEmpty={isEmpty.current}
      />
      <View style={styles.footer}>
        <TouchableOpacity color="black" onPress={toggleModal}>
          <IconPlus name="add" size={41} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
