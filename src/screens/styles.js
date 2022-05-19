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
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 40,
    height: 110,
    width: 325,
    alignSelf: 'center',
    flexGrow: 0,
  },
});

export default styles;
