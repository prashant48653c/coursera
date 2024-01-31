import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function SectionHeading({heading}) {
  return (
    <View style={{margin:10,marginVertical:20}}>
      <Text style={{color:Colors.PRIMARY,fontWeight:800,fontSize:23,fontFamily:"outfit"}}>{heading}</Text>
    </View>
  )
}