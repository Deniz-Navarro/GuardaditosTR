import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';
import ProductStyles from './productStyles';
import storage from '@react-native-firebase/storage';

const ItemProduct = props => {
  const {title, cantidad, img, text, onPress, index, clave1} = props;
  const [par, setPar] = useState(true);
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    if (index % 2 == 0) setPar(true);
    else setPar(false);
    const getUri = async path => {
      console.log('La clave es: ' + path);
      const consult = await storage().ref(path).getDownloadURL();
      try {
        setUrl(consult);
      } catch (e) {
        console.log(e);
        setUrl(undefined);
      }
    };
    clave1 ? getUri('elements/' + clave1) : null;
  }, [index, clave1]);
  const sourceImg = img ? {uri: img} : LogoImg;
  return (
    <View>
      <TouchableOpacity
        style={par ? ProductStyles.container : ProductStyles.container2}
        onPress={onPress}>
        <View style={ProductStyles.containerImage}>
          <Image
            style={ProductStyles.tinyLogo}
            source={url ? {uri: url} : LogoImg}
          />
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
