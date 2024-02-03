import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name="Home" component={TabNavigation}  />
<Stack.Screen name="coursedetail" component={BookingScreen}  />

   </Stack.Navigator>
  )
}