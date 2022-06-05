import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import ItemRoom from '../../atoms/itemRoom';
import ItemProduct from '../../atoms/ItemProduct';

const HorizontalList = props => {
  const {
    data,
    navigation,
    isProduct,
    isLoading,
    onRefresh,
    isEmpty,
    Home,
    User,
  } = props;
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
      cantidad={item.cantidad}
      text={item.detalle}
      Home={Home}
      onPress={
        Home
          ? () =>
              navigation.navigate('HomeProducts', {
                clave: item.clave,
              })
          : () =>
              navigation.navigate('ProductDetails', {
                clave: item.clave,
              })
      }
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
      style={User ? flatStyles.container2 : flatStyles.container}
      renderItem={isProduct ? renderItem2 : renderItem}
      refreshing={isLoading}
      onRefresh={onRefresh}
      ListEmptyComponent={
        isEmpty ? (
          <EmptyText text={text} />
        ) : (
          <EmptyText text="No se encontró ningún registro que coincida." />
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
  container2: {
    marginTop: 20,
    height: 120,
    flexGrow: 0,
  },
});

export default HorizontalList;
