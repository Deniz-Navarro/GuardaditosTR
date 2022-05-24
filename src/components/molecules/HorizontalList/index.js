import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ItemRoom from '../../atoms/itemRoom';

const HorizontalList = props => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      style={flatStyles.container}
      renderItem={({item}) => (
        <ItemRoom
          title={item.nombre}
          codigo={item.codigo}
          text={item.detalle}
        />
      )}
    />
  );
};

const flatStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: '80%',
    flexGrow: 0,
  },
});

export default HorizontalList;
