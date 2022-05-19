import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
import imageUploaderStyles from './imageUploaderStyles';

const Upload = () => {
  const [image, setImage] = useState();

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
          <Text>{image ? 'Edita' : 'Carga'} Avatar</Text>
          <Icon name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Upload;
