import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';
import CustomButtom from '../CustomButtom';
import Button from '../Button';
import modalStyles from './modalStyles';
import InputContainer from '../TextInput';
import firestore from '@react-native-firebase/firestore';
import styles from '../../../screens/styles';

const EditModal = props => {
  const {isModalVisible, onPress, campo, id} = props;
  const [nuevoValor, setNuevoValor] = useState('');
  var keyboardtype = false;
  const updateInfo = () => {
    firestore()
      .collection('Elementos')
      .doc(id)
      .update({
        [campo]: nuevoValor,
      })
      .then(() => {
        alert('¡El producto ha sido actualizado!');
      });
  };
  if (campo === 'cantidad') {
    keyboardtype = true;
  }
  return (
    <Modal animationType="slide" visible={isModalVisible} transparent>
      <View style={modalStyles.modalStyle}>
        <View style={modalStyles.headerModal}>
          <Text style={modalStyles.modalTitle}>Editar</Text>
          <CustomButtom name="close" onPress={onPress} color="#000" size={30} />
        </View>
        <Text>{campo}</Text>
        <InputContainer
          placeholder={props.anterior?.toString()}
          value={nuevoValor}
          keyboardType={keyboardtype ? 'numeric' : null}
          onChangeText={a => {
            setNuevoValor(a);
          }}
        />
        <Button text="Actualizar" onPress={updateInfo} />
      </View>
    </Modal>
  );
};

export default EditModal;
