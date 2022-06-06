import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import EditModal from '../components/atoms/EditModal';
import {useIsFocused} from '@react-navigation/native';
import {AbortController} from 'native-abort-controller';
import Button from '../components/atoms/Button';

const deleteProduct = id => {
  firestore()
    .collection('Elementos')
    .doc(id)
    .delete()
    .then(() => {
      alert('Producto eliminado!');
    });
};

export const devolverProducto = (id, cantidad, setSolicitado) => {
  firestore()
    .collection('Elementos')
    .doc(id)
    .update({
      estado: true,
      cantidad: cantidad + 1,
      solicitado: '',
    })
    .then(() => {
      alert('El producto ha sido devuelto, ¡Muchas gracias!');
    });
  setSolicitado('');
};

export const solicitarProducto = (
  id,
  cantidad,
  setSolicitado,
  setModalVisible,
) => {
  const currentUser = auth().currentUser;
  if (cantidad > 0) {
    firestore()
      .collection('Elementos')
      .doc(id)
      .update({
        estado: cantidad > 1 ? true : false,
        cantidad: cantidad > 0 ? cantidad - 1 : 0,
        solicitado: currentUser.uid,
      })
      .then(() => {
        alert(
          'El producto ha sido solicitado, ¡Por favor devuelvelo pronto! n.n ',
        );
      });
    setSolicitado(currentUser.uid);
  } else {
    alert('Este producto no esta disponible');
  }
};

export const ProductDetails = ({route, navigation}) => {
  const {clave} = route.params;
  const [product, setProduct] = useState();
  const [documentId, setDocumentId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [campo, setCampo] = useState();
  const [solicitado, setSolicitado] = useState('');
  const [anterior, setAnterior] = useState();
  const isFocused = useIsFocused();
  const currentUser = auth().currentUser;
  const toggleModal = (c1, c2) => {
    setCampo(c1);
    setAnterior(c2);
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const controlador = new AbortController();
    firestore()
      .collection('Elementos')
      // Filter results
      .where('clave', '==', clave)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          isFocused && setProduct(documentSnapshot.data());
          setDocumentId(documentSnapshot.id);
          setSolicitado(documentSnapshot.data().solicitado);
        });
      });
    return () => controlador.abort();
  }, [clave, isFocused, isModalVisible, solicitado]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header2}>
        <CustomButtom
          name="chevron-left"
          size={50}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title2}>{product ? product.nombre : null}</Text>
      </View>
      <View style={styles.containerEdit}>
        <View style={styles.itemSala}>
          <View style={styles.description}>
            <Text style={styles.textDetail}> Clave del producto: </Text>
            <Text style={styles.textDescription}>
              {product ? product.clave : null}{' '}
            </Text>
          </View>
        </View>
        <View style={styles.itemSala}>
          <View style={styles.description}>
            <Text style={styles.textDetail}>Cantidad: </Text>
            <Text style={styles.textDescription}>
              {' '}
              {product ? product.cantidad : null}{' '}
            </Text>
          </View>
          <CustomButtom
            name="pencil"
            size={30}
            color="green"
            onPress={() => toggleModal('cantidad', product.cantidad)}
          />
        </View>
        <View style={styles.itemSala}>
          <View styles={styles.description}>
            <Text style={styles.textDetail}>Responsable:</Text>
            <Text style={styles.textDescription}>
              {' '}
              {product ? product.correo : null}{' '}
            </Text>
          </View>
          <CustomButtom
            name="pencil"
            size={30}
            color="green"
            onPress={() => toggleModal('correo', product.correo)}
          />
        </View>
        <View style={styles.itemSala}>
          <View style={styles.description}>
            <Text style={styles.textDetail}>Descripción:</Text>
            <Text style={styles.textDescription}>
              {' '}
              {product ? product.detalle : null}{' '}
            </Text>
          </View>
          <CustomButtom
            name="pencil"
            size={30}
            color="green"
            onPress={() => toggleModal('detalle', product.detalle)}
          />
        </View>
        <View style={styles.itemSala}>
          <View style={styles.description}>
            <Text style={styles.textDetail}>Estado: </Text>
            <Text style={styles.textDescription}>
              {product
                ? product.estado
                  ? 'Disponible'
                  : 'No disponible'
                : null}
            </Text>
          </View>
        </View>
        <EditModal
          isModalVisible={isModalVisible}
          onPress={toggleModal}
          campo={campo}
          anterior={anterior}
          id={documentId}
        />
        <Button
          text={solicitado === currentUser.uid ? 'Devolver' : 'Solicitar'}
          styles={styles.buttonChange}
          onPress={() => {
            solicitado === currentUser.uid
              ? devolverProducto(documentId, product.cantidad, setSolicitado)
              : solicitarProducto(documentId, product.cantidad, setSolicitado);
          }}
        />
        <Button
          text="Eliminar"
          styles={styles.buttonChange}
          onPress={() => {
            deleteProduct(documentId);
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
};
