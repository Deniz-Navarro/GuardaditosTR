import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import ItemRoom from '../../atoms/itemRoom';
import ItemProduct from '../../atoms/ItemProduct';

const HorizontalList = props => {
  const {data, navigation, isProduct, isLoading, onRefresh, isEmpty} = props;
  var text = '';
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

  const EmptyText = ({text}) => (
    <View style={{alignItems: 'center'}}>
      <Text>{text}</Text>
    </View>
  );

  isProduct
    ? (text = 'No existe ningún producto registrado en el aula.')
    : (text = 'No estás registrado en nigún aula.');

  return (
    <FlatList
      data={data}
      style={flatStyles.container}
      renderItem={isProduct ? renderItem2 : renderItem}
      refreshing={isLoading}
      onRefresh={onRefresh}
      ListEmptyComponent={
        isEmpty ? (
          <EmptyText text={text} />
        ) : (
          <EmptyText text="No se encontró ningún aula que coincida." />
        )
      }
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
