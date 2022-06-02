import React from 'react';
import {Modal, View, Text} from 'react-native';
import CustomButtom from '../CustomButtom';
import Button from '../Button';
import modalStyles from './modalStyles';

const CustomModal = props => {
  const {isModalVisible, onPress, onPress1, onPress2, txt1, txt2} = props;
  return (
    <Modal animationType="slide" visible={isModalVisible} transparent>
      <View style={modalStyles.modalStyle}>
        <View style={modalStyles.headerModal}>
          <Text style={modalStyles.modalTitle}>Menu</Text>
          <CustomButtom name="close" onPress={onPress} color="#000" size={30} />
        </View>
        <Button text={txt1} onPress={onPress1} />
        <Button text={txt2} onPress={onPress2} />
      </View>
    </Modal>
  );
};

export default CustomModal;
