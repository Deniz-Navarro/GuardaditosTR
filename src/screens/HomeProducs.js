import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Button from '../components/atoms/Button';
import {solicitarProducto, devolverProducto} from './ProductDetails';

export const HomeProducts = ({route, navigation}) => {
  const {clave} = route.params;
  const [solicitado, setSolicitado] = useState('');
  const currentUser = auth().currentUser;
  const [products, setProducts] = useState();
  const [documentId, setDocumentId] = useState();
  const [roomCode, setRoomCode] = useState();
  const [aula, setAula] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const isEmpty = useRef(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    firestore()
      .collection('Elementos')
      .where('clave', '==', clave)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setProducts(documentSnapshot.data());
          setDocumentId(documentSnapshot.id);
          setRoomCode(documentSnapshot.data().roomCode);
          setSolicitado(documentSnapshot.data().solicitado);
        });
      });
  }, [clave, solicitado]);

  useEffect(() => {
    if (roomCode) {
      firestore()
        .collection('Aulas')
        .where('codigo', '==', roomCode)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            setAula(documentSnapshot.data());
          });
        })
        .catch(err => console.log(err));
    }
  }, [roomCode]);

  return (
    <View style={styles.container}>
      <Text>
        Clave del producto:
        {products ? <Text> {products.clave}</Text> : null}
      </Text>
      <Text>
        Cantidad:
        {products ? <Text> {products.cantidad}</Text> : null}
      </Text>
      <Text>
        Persona responsable:
        {products ? <Text> {products.correo}</Text> : null}
      </Text>
      <Text>
        Estado:
        {products ? (
          <Text> {products.estado ? 'Disponible' : 'No Disponible'}</Text>
        ) : null}
      </Text>
      <Text>
        Este producto pertenece a:
        {aula ? <Text> {aula.nombre}</Text> : null}
      </Text>
      <Button
        text={solicitado === currentUser.uid ? 'Devolver' : 'Solicitar'}
        onPress={() => {
          solicitado === currentUser.uid
            ? devolverProducto(documentId, products.cantidad, setSolicitado)
            : solicitarProducto(documentId, products.cantidad, setSolicitado);
        }}
      />
    </View>
  );
};
