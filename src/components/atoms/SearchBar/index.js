import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SearchBarStyles';

const SearchBar = ({setValue, value}) => {
  return (
    <View style={styles.searchB}>
      <Icon
        name="search"
        size={25}
        color="#000"
        style={styles.iconSearchStyle}
      />
      <TextInput
        placeholderTextColor={'gray'}
        placeholder="Buscar"
        style={styles.textInputStyle}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
};
export default SearchBar;
