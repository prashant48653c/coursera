import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
 



const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY,
       tabBarActiveBackgroundColor:"#ccc"

    }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({color, size}) => {
         return <FontAwesome name="home" size={29} color={color}  />
        },
        tabBarLabel:({color})=>(
          <Text style={{color:color}}>Home</Text>
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon:({color, size})=>{
          return <MaterialCommunityIcons name="account-tie-hat" size={29} color={color} />
        },
        tabBarLabel:({color})=>(
          <Text style={{color:color}} >Profile</Text>

        )
      }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{
        tabBarIcon:({color, size})=>{
          return <FontAwesome name="bookmark" size={29} color={color} />
        },
        tabBarLabel:({color})=>(
          <Text style={{color:color}}>Course</Text>

        )
      }} />

    </Tab.Navigator>

  )
}