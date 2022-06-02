import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import EditModal from '../components/atoms/EditModal';
import {useIsFocused} from '@react-navigation/native';

export const ProductDetails = ({route, navigation}) => {
  const {clave} = route.params;
  const [product, setProduct] = useState();
  const [documentId, setDocumentId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [campo, setCampo] = useState();
  const [anterior, setAnterior] = useState();
  const isFocused = useIsFocused();
  const toggleModal = (c1, c2) => {
    setCampo(c1);
    setAnterior(c2);
    setModalVisible(!isModalVisible);
  };

  const cargarDatos = () => {
    firestore()
      .collection('Elementos')
      // Filter results
      .where('clave', '==', clave)
      .get()
      .then(querySnapshot => {
        const aulasAux = [];
        querySnapshot.forEach(documentSnapshot => {
          aulasAux.push(documentSnapshot.data());
          setDocumentId(documentSnapshot.id);
        });
        setProduct(aulasAux);
      });
  };
  cargarDatos();

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
        <Text style={styles.title2}>{product ? product[0].nombre : null}</Text>
      </View>
      <View style={styles.itemSala}>
        <Text>Clave del producto: {product ? product[0].clave : null}</Text>
      </View>
      <View style={styles.itemSala}>
        <Text>Cantidad: {product ? product[0].cantidad : null}</Text>
        <CustomButtom
          name="pencil"
          size={30}
          color="green"
          onPress={() => toggleModal('cantidad', product[0].cantidad)}
        />
      </View>
      <View style={styles.itemSala}>
        <Text>Responsable: {product ? product[0].correo : null}</Text>
        <CustomButtom
          name="pencil"
          size={30}
          color="green"
          onPress={() => toggleModal('correo', product[0].correo)}
        />
      </View>
      <View style={styles.itemSala}>
        <Text>Descripción: {product ? product[0].detalle : null}</Text>
        <CustomButtom
          name="pencil"
          size={30}
          color="green"
          onPress={() => toggleModal('detalle', product[0].detalle)}
        />
      </View>
      <EditModal
        isModalVisible={isModalVisible}
        onPress={toggleModal}
        campo={campo}
        anterior={anterior}
        id={documentId}
      />
    </SafeAreaView>
  );
};
