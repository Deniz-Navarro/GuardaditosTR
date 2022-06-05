import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import SearchBar from '../components/atoms/SearchBar';
import HorizontalList from '../components/molecules/HorizontalList';
import {useIsFocused} from '@react-navigation/native';

export const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const isEmpty = useRef(true);
  const isFocused = useIsFocused();

  const getProducts = async () => {
    const data = await firestore().collection('Elementos').get();
    const aulasAux = [];
    data.forEach(documentSnapshot => {
      aulasAux.push(documentSnapshot.data());
      isEmpty.current = false;
    });
    setLoading(false);
    return aulasAux;
  };

  const setAulasFiltered = async () => {
    setLoading(true);
    const aulasAux = await getProducts();
    const aulasAuxFiltered = aulasAux.filter(aula => {
      const nombreLowCase = aula.nombre.toLowerCase();
      if (nombreLowCase.includes(searchValue.toLowerCase())) {
        return aula;
      }
    });
    isFocused && setProducts(searchValue === '' ? aulasAux : aulasAuxFiltered);
  };

  useEffect(() => {
    setAulasFiltered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isFocused, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Inventario Global</Text>
      </View>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <HorizontalList
        data={products}
        navigation={navigation}
        isLoading={isLoading}
        isProduct
        isEmpty={isEmpty.current}
        Home
      />
    </View>
  );
};
