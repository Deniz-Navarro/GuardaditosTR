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

export const RoomDetails = ({route, navigation}) => {
  const {roomCode} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
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
      <Text style={styles.subtitle}>
        Codigo de invitacion: {roomInfo.codigo}
      </Text>
      <HorizontalList
        data={products}
        navigation={navigation}
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
