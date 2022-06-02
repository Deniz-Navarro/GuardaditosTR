import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';
import ItemStyles from './ItemStyles';

const ItemRoom = props => {
  const {title, codigo, img, text, navigation} = props;
  return (
    <TouchableOpacity
      style={ItemStyles.container}
      onPress={() =>
        navigation.navigate('RoomDetails', {
          roomCode: codigo,
        })
      }>
      <View style={ItemStyles.containerImage}>
        <Image style={ItemStyles.tinyLogo} source={LogoImg} />
      </View>
      <View style={ItemStyles.contentDetail}>
        <Text style={ItemStyles.title}>{title}</Text>
        <View style={ItemStyles.view}>
          <Text>Codigo: {codigo}</Text>
          <Text style={ItemStyles.info}>Descripción: {text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRoom;
