import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import {useNavigation} from '@react-navigation/native'
export default function CourseItem({course}) {
  const navigation=useNavigation()
    console.log(course.item)
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("coursedetail",{
      course:course  //passing course to course detail page
    })} 
    
    
    style={{marginRight:10,backgroundColor:Colors.WHITE,paddingHorizontal:10,paddingVertical:10,borderRadius:10,marginHorizontal:10,width:250}} >

        <Image style={{width:"100%",height:130,borderRadius:10}} 
        source={{uri:course?.item.thumbnail}} />

       
        <Text style={{color:course?.item.status == "Free" ? "green" : "red"}}>{course.item.status}</Text>

       

        <Text style={{fontFamily:"outfit-bold",paddingVertical:4,fontSize:17}}>{course?.item.name}</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:6,gap:10}}>
            <Image style={{width:30,height:30}} alt='Logo' source={{uri:course?.item?.teacherImg}}/>
            <View style={{display:"flex"}}>
            <Text style={{fontFamily:"outfit-bold",color:Colors.PRIMARY, }}>{course?.item.teacher}

            </Text>
      
            
            </View>
      

        </View>
    </TouchableOpacity>
  )
}