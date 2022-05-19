import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import Upload from '../components/atoms/Upload';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import firestore from '@react-native-firebase/firestore';

const crearProductos = (nombre, cantidad, correo, detalle) => {
  firestore()
    .collection('Elementos')
    .add({
      nombre: nombre,
      cantidad: cantidad,
      correo: correo,
      detalle: detalle,
    })
    .then(() => {
      console.log('Producto creado!');
    });
};

export const ProductForm = ({navigation}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [correo, setCorreo] = useState('');
  const [detalle, setDetalle] = useState('');
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
        <Text style={styles.title2}>Crear nuevo producto</Text>
      </View>
      <Upload />
      <InputContainer
        placeholder="Nombre del producto (Obligatorio)"
        styles={styles.inputProduct}
        onChangeText={a => setNombre(a)}
      />
      <InputContainer
        placeholder="Cantidad"
        styles={styles.inputProduct}
        keyboardType="numeric"
        onChangeText={a => setCantidad(a)}
      />
      <InputContainer
        placeholder="Nombre / Correo del responsable"
        styles={styles.inputProduct}
        onChangeText={a => setCorreo(a)}
      />
      <InputContainer
        placeholder="Agrega detalles del producto..."
        multiLine={true}
        numberOfLines={10}
        styles={styles.textProduct}
        onChangeText={a => setDetalle(a)}
      />
      <Button
        text="Guardar"
        styles={styles.buttonGuardar}
        onPress={() => {
          crearProductos(nombre, cantidad, correo, detalle);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
