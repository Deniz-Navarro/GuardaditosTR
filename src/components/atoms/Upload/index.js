import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import imageUploaderStyles from './imageUploaderStyles';
import storage from '@react-native-firebase/storage';

const Upload = props => {
  const {id, carpeta} = props;
  const [image, setImage] = useState();
  const [url, setUrl] = useState(undefined);
  const [encontrado, setEncontrado] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      const consult = storage().ref(id).getDownloadURL();
      try {
        await consult;
        setUrl(consult);
        setEncontrado(true);
      } catch (e) {
        setUrl(null);
      }
    };
    getImage();
  }, [id, image]);

  const addImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const uploadImage = async uri => {
      const task = storage()
        .ref(carpeta + id)
        .putFile(uri);
      try {
        await task;
        console.log('agregado');
        setUrl(uri);
      } catch (e) {
        console.error(e);
        setUrl(null);
      }
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let respuesta = response.assets[0];
        setImage(respuesta);
        uploadImage(respuesta.uri);
        setEncontrado(true);
      }
    });
  };
  return (
    <View style={imageUploaderStyles.container}>
      {image && (
        <Image
          source={{
            uri: image.uri,
          }}
          style={{width: 200, height: 200}}
        />
      )}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}>
          <Icon name="upload" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Upload;
