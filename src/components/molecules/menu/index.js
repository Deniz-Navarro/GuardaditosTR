import React from 'react';
import StyleSheet from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Room, User} from '../../../screens';

const Tab = createBottomTabNavigator();
//Icons
const homeIcon = <Icon name="rocket" size={30} color="#900" />;

const Menu = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#000000',
          borderRadius: 10,
        },
        tabBarLabelStyle: {
          color: '#ffffff',
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: <Icon name="rocket" size={30} color="#900" />}}
      />
      <Tab.Screen name="Salas" component={Room} />
      <Tab.Screen name="Usuario" component={User} />
    </Tab.Navigator>
  );
};

export default Menu;
