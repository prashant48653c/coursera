import { View, Text } from 'react-native'
import React from 'react'
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';

const Tab = createBottomTabNavigator();

 
export default function TabNavigation() {
  return (
    
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />

    </Tab.Navigator>
    
  )
}