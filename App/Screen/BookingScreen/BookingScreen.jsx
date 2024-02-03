import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useRoute} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import HomeScreen from '../HomeScreen/HomeScreen';
import CourseIntro from '../../components/CourseIntro';




export default function BookingScreen() {
  const {params}=useRoute()
  const [course, setCourse] = useState([])
  const nav=useNavigation()
  useEffect(()=>{
 
setCourse(params.course)
  },[params])
  return (
    <ScrollView style={{paddingVertical:13,paddingHorizontal:10}}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:50}} >
        <TouchableOpacity onPress={()=>{nav.goBack()}}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />

        </TouchableOpacity>
      <Text style={{fontFamily:"outfit-bold",fontSize:27}}>Course Detail</Text>

      </View>
  
  <CourseIntro course={course}/>

  </ScrollView>
  )
}