import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LogoImg from '../../../assets/images/LogoUDC2.png';
import ItemStyles from './ItemStyles';
import storage from '@react-native-firebase/storage';

const ItemRoom = props => {
  const {title, codigo, img, text, navigation, index} = props;
  const [par, setPar] = useState(true);
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    if (index % 2 == 0) setPar(true);
    else setPar(false);
    const getUri = async path => {
      const consult = await storage().ref(path).getDownloadURL();
      try {
        setUrl(consult);
      } catch (e) {
        console.error(e);
        setUrl(undefined);
      }
    };
    getUri('rooms/' + codigo);
  }, [index, codigo]);
  return (
    <TouchableOpacity
      style={par ? ItemStyles.container : ItemStyles.container2}
      onPress={() =>
        navigation.navigate('RoomDetails', {
          roomCode: codigo,
        })
      }>
      <View style={ItemStyles.containerImage}>
        <Image
          style={ItemStyles.tinyLogo}
          source={url ? {uri: url} : LogoImg}
        />
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
