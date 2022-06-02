import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemRoom from '../../atoms/itemRoom';
import ItemProduct from '../../atoms/ItemProduct';

const HorizontalList = props => {
  const {data, navigation, isProduct, isLoading, onRefresh, isEmpty} = props;
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
      navigation={navigation}
    />
  );

  const EmptyText = ({text}) => (
    <View style={{alignItems: 'center'}}>
      <Text>{text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      style={flatStyles.container}
      renderItem={isProduct ? renderItem2 : renderItem}
      refreshing={isLoading}
      onRefresh={onRefresh}
      ListEmptyComponent={
        isEmpty ? (
          <EmptyText text="No se encontró ningún aula que coincida." />
        ) : (
          <EmptyText text="No estás registrado en nigún aula." />
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
