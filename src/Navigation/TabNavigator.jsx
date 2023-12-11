import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import DeviceDetailsScreen from '../Screens/DeviceDetailsScreen';
import AccountScreen from '../Screens/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', 
        },
        tabBarActiveTintColor: '#8355C4', 
        tabBarInactiveTintColor: 'grey', 
        tabBarShowLabel: true, 
        tabBarItemStyle: {
          color: 'grey', 
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIconWithDot
              icon={<Ionicons name="home" size={size} color={color} />}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DeviceDetails"
        component={DeviceDetailsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIconWithDot
              icon={
                <Material
                  name="perm-device-information"
                  size={size}
                  color={color}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIconWithDot
              icon={
                <MaterialIcons
                  name="clipboard-account-outline"
                  size={size}
                  color={color}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const TabBarIconWithDot = ({ icon, focused }) => {
  return (
    <View style={styles.iconContainer}>
      {icon}
      {focused && <View style={styles.dot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    // backgroundColor:"pink"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8355C4',
    marginTop: 4,
  },
});


export default TabNavigator;