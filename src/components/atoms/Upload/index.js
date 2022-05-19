import React, {useState} from 'react';
// Import required components
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

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

const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 150,
    width: 150,
    backgroundColor: '#646464',
    borderRadius: 90,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
