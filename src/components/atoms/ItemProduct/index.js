import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';
import ProductStyles from './productStyles';

const ItemProduct = props => {
  const {title, cantidad, img, text, navigation, claveProducto} = props;
  return (
    <TouchableOpacity
      style={ProductStyles.container}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          clave: claveProducto,
        })
      }>
      <View style={ProductStyles.containerImage}>
        <Image style={ProductStyles.tinyLogo} source={LogoImg} />
      </View>
      <View style={ProductStyles.contentDetail}>
        <Text style={ProductStyles.title}>{title}</Text>
        <View style={ProductStyles.view}>
          <Text>Cantidad: {cantidad}</Text>
          <Text style={ProductStyles.info}>Descripción: {text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProduct;
