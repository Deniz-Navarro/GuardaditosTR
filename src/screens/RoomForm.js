import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import styles from './styles';
import Upload from '../components/atoms/Upload';
import InputContainer from '../components/atoms/TextInput';
import Button from '../components/atoms/Button';

export const RoomForm = ({navigation}) => {
  const [email, setEmail] = useState('');
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
      <Upload />
      <InputContainer placeholder="Nombre de la sala (Obligatorio)" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        placeholder="Descripción breve..."
        multiLine={true}
        numberOfLines={10}
        styles={styles.textaerea}
      />
      <Button
        text="Guardar"
        styles={styles.buttonGuardar}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
