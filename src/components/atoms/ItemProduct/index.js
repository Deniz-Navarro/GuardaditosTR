import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';
import ProductStyles from './productStyles';

const ItemProduct = props => {
  const {title, cantidad, img, text, onPress, index} = props;
  const [par, setPar] = useState(true);
  useEffect(() => {
    if (index % 2 == 0) setPar(true);
    else setPar(false);
  }, [index]);
  const sourceImg = img ? {uri: img} : LogoImg;
  return (
    <View>
      <TouchableOpacity
        style={par ? ProductStyles.container : ProductStyles.container2}
        onPress={onPress}>
        <View style={ProductStyles.containerImage}>
          <Image style={ProductStyles.tinyLogo} source={sourceImg} />
        </View>
        <View style={ProductStyles.contentDetail}>
          <Text style={ProductStyles.title}>{title}</Text>
          <View style={ProductStyles.view}>
            <Text>Cantidad: {cantidad}</Text>
            <Text style={ProductStyles.info}>Descripción: {text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemProduct;
