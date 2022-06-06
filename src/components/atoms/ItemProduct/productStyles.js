import {StyleSheet} from 'react-native';

const ProductStyles = StyleSheet.create({
  container: {
    backgroundColor: '#6B9C54',
    width: '95%',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 5,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    borderRadius: 180,
    marginHorizontal: 7,
    marginTop: 5,
  },
  view: {
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentDetail: {
    marginLeft: 10,
  },
  info: {
    maxWidth: 250,
  },
  containerImage: {
    backgroundColor: 'white',
    borderRadius: 90,
    marginTop: 3,
    height: 70,
    width: 70,
  },
});

export default ProductStyles;
