import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#C5D8A4',
  },
  containerWelcome: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5D8A4',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  //login styles
  forgot: {
    textAlign: 'right',
    marginBottom: 40,
    fontWeight: 'bold',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  registro: {
    textAlign: 'center',
    marginTop: 8,
    color: '#4682B4',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  //Room styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  //User styles
  userInformation: {
    fontSize: 18,
    fontFamily: 'Arial',
    marginTop: 10,
  },
  userInfoContainer: {
    marginTop: 40,
    marginBottom: 20,
    height: 110,
    width: 325,
    alignSelf: 'center',
    flexGrow: 0,
  },
  logout: {
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
  },
  textlogout: {
    color: '#B80B0B',
    fontWeight: 'bold',
  },
  //RoomForm styles
  header2: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  inputCodigo: {
    width: 200,
    height: 55,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
  },
  styleView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textaerea: {
    height: 200,
    textAlignVertical: 'top',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
  },
  textProduct: {
    height: 120,
    textAlignVertical: 'top',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
  },
  inputProduct: {
    height: 40,
    textAlignVertical: 'top',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 18,
  },
  buttonGenerar: {
    width: 150,
    height: 55,
    backgroundColor: '#D06C3F',
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonGuardar: {
    backgroundColor: '#D06C3F',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  footer: {
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginBottom: 10,
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  itemSala: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 60,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
  },
  containerInfo: {
    backgroundColor: '#77A579',
    color: '#000',
    marginTop: 40,
    marginBottom: 20,
    height: 170,
    width: 325,
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    flexGrow: 0,
  },
  containText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default styles;
