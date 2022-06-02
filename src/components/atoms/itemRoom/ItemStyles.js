import {StyleSheet} from 'react-native';

const ItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#6B9C54',
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    borderRadius: 180,
    marginLeft: 6,
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
    marginLeft: 15,
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

export default ItemStyles;
