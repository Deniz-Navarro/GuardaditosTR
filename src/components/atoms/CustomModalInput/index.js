import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';
import CustomButtom from '../CustomButtom';
import Button from '../Button';
import modalStyles from './modalStyles';
import TextInput from '../TextInput';

const CustomModalInput = props => {
  const {isModalVisible, onPress, onPress1, txt} = props;
  const [code, setCode] = useState('');

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent>
      <View style={modalStyles.modalStyle}>
        <View style={modalStyles.headerModal}>
          <Text style={modalStyles.modalTitle} />
          <CustomButtom name="close" onPress={onPress} color="#000" size={30} />
        </View>
        <Text style={modalStyles.modalTitle}>{txt}</Text>
        <TextInput placeholder="######" value={code} onChangeText={setCode} />
        <Button text="Aceptar" onPress={() => onPress1(code, setCode)} />
      </View>
    </Modal>
  );
};

export default CustomModalInput;
