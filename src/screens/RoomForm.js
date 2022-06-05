import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import Upload from '../components/atoms/Upload';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const crearAula = (nombre, aleatorio, detalle) => {
  const current = auth().currentUser;
  firestore()
    .collection('Aulas')
    .add({
      nombre: nombre,
      codigo: aleatorio,
      detalle: detalle,
      users: [current.uid],
    })
    .then(() => {
      console.log('Aula creada!');
    });
};

export const RoomForm = ({navigation}) => {
  const [nombre, setNombre] = useState('');
  const [detalle, setDetalle] = useState('');
  const [aleatorio, setAleatorio] = useState('');
  const generateCode = () => {
    let cadena = '';
    for (let i = 0; i < 6; i += 1) {
      let numaleatorio = Math.floor(Math.random() * 10);
      cadena += numaleatorio;
    }
    setAleatorio(cadena);
  };

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
        <Text style={styles.title2}>Crear nueva aula</Text>
      </View>
      <Upload id={aleatorio} carpeta="rooms/" />
      <InputContainer
        placeholder="Nombre de la sala (Obligatorio)"
        onChangeText={a => setNombre(a)}
      />
      <View style={styles.styleView1}>
        <Text style={styles.inputCodigo}>
          {aleatorio ? aleatorio : 'Codigo'}
        </Text>
        <Button
          text="Generar"
          styles={styles.buttonGenerar}
          onPress={generateCode}
        />
      </View>
      <InputContainer
        placeholder="Agrega detalles sobre el aula..."
        multiLine={true}
        numberOfLines={10}
        styles={styles.textaerea}
        onChangeText={a => setDetalle(a)}
      />
      <Button
        text="Guardar"
        styles={styles.buttonGuardar}
        onPress={() => {
          crearAula(nombre, aleatorio, detalle);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
