import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {Home, Login, Register, Welcome} from '../screens';
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#9FC3D8',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialRouteName={auth().currentUser ? 'Home' : 'Welcome'}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default MainStack;