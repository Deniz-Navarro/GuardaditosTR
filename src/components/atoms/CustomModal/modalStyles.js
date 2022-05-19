import {StyleSheet} from 'react-native';

const modalStyles = StyleSheet.create({
  modalStyle: {
    marginTop: '50%',
    margin: 20,
    backgroundColor: '#94C075',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
});

export default modalStyles;
