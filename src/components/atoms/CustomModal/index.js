import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import CustomButtom from '../CustomButtom';
import Button from '../Button';

const CustomModal = props => {
  const {isModalVisible, onPress} = props;
  return (
    <Modal animationType="slide" visible={isModalVisible} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.headerModal}>
          <Text style={styles.modalTitle}>Modal Menu</Text>
          <CustomButtom name="close" onPress={onPress} color="#000" size={30} />
        </View>
        <Button
          text="Ingresar a una sala"
          onPress={() => console.log('ingresar')}
        />
        <Button text="Crear nueva sala" onPress={() => console.log('crear')} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    marginTop: '50%',
    margin: 20,
    backgroundColor: '#94C075',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
});

export default CustomModal;
