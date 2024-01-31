import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SectionHeading from './SectionHeading'
import CourseItem from './CourseItem'

export default function CourseList({courses}) {
  return (
    <View>
       
      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={courses} renderItem={(item,index)=>(
        <CourseItem course={item}/>
      )} />
    </View>
  )
}