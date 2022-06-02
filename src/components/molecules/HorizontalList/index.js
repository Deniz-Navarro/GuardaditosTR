import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ItemRoom from '../../atoms/itemRoom';
import ItemProduct from '../../atoms/ItemProduct';

const HorizontalList = props => {
  const {data, navigation, isProduct} = props;
  const renderItem = ({item}) => (
    <ItemRoom
      title={item.nombre}
      codigo={item.codigo}
      text={item.detalle}
      navigation={navigation}
    />
  );
  const renderItem2 = ({item}) => (
    <ItemProduct
      title={item.nombre}
      claveProducto={item.clave}
      cantidad={item.cantidad}
      text={item.detalle}
      navigation={navigation}
    />
  );

  return (
    <FlatList
      data={data}
      style={flatStyles.container}
      renderItem={isProduct ? renderItem2 : renderItem}
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
