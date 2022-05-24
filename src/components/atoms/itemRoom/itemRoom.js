import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';

const ItemRoom = props => {
  const {title, stock, img, text, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.tinyLogo} source={LogoImg} />
      <View style={styles.contentDetail}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.view}>
          <Text>Stock: {stock}</Text>
          <Text>Descripción: {text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6B9C54',
    width: '95%',
    height: '13%',
    borderRadius: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    borderRadius: 180,
    marginLeft: 10,
    marginTop: 5,
  },
  view: {
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentDetail: {
    marginLeft: 10,
  },
});
