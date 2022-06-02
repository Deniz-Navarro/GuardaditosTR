import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  RoomForm,
  Login,
  Register,
  Welcome,
  ProductForm,
  RoomDetails,
} from '../screens';
import auth from '@react-native-firebase/auth';
import Menu from '../components/molecules/menu';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={auth().currentUser ? 'Menu' : 'Welcome'}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RoomForm" component={RoomForm} />
        <Stack.Screen name="RoomDetails" component={RoomDetails} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductForm" component={ProductForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
