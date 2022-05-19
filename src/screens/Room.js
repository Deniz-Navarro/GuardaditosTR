import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomModal from '../components/atoms/CustomModal';
import Button from '../components/atoms/Button';
import styles from './styles';

export const Room = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Aulas</Text>
        <CustomButtom name="navicon" size={40} onPress={toggleModal} />
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        onPress={toggleModal}
        onPress2={() => {
          toggleModal();
          navigation.navigate('RoomForm');
        }}
      />
      <Button
        text="Generar"
        styles={styles.buttonGenerar}
        onPress={() => {
          navigation.navigate('ProductForm');
        }}
      />
    </SafeAreaView>
  );
};
