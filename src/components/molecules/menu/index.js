import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Room, User} from '../../../screens';

const Tab = createBottomTabNavigator();

const Menu = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#646464',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#ffffff',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="house-user"
                size={30}
                color={focused ? '#2F2F2F' : '#ffffff'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Aulas"
        component={Room}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="box-open"
                size={25}
                color={focused ? '#2F2F2F' : '#ffffff'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="user-tie"
                size={30}
                color={focused ? '#2F2F2F' : '#ffffff'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;
