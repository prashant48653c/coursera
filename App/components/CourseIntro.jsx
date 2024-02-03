import { View, Text,StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import SectionHeading from './SectionHeading';
import Colors from '../Utils/Colors';
import Categories from './Categories';


export default function CourseIntro({course}) {
   const [activeCategory, setactiveCategory] = useState(0)

    let categories=[
        {
          _id:1,
          logo:"https://www.safalpoudel.me/safal.png",
          name:"React"
        },{
          _id:2,
          logo:"https://www.safalpoudel.me/safal.png",
          name:"Next"
        },{
          _id:3,
          logo:"https://www.safalpoudel.me/safal.png",
          name:"Vite"
        },{
          _id:4,
          logo:"https://www.safalpoudel.me/safal.png",
          name:"Vue"
        },{
          _id:5,
          logo:"https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp",
          name:"Java"
        },
      ]
    console.log(course,"vayo")
    
        return (
            <View style={{paddingHorizontal:10}}>
             <Video
              
                style={styles.video}
                source={{ uri: course?.item?.videoUrl}}
                useNativeControls={true}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                shouldPlay={true}
                autoPlay
        
              />
              <View style={{marginTop:4}}>
               <Text style={{fontFamily:"outfit-bold",fontSize:18}}> {course?.item?.name}</Text>
              </View>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                <View>
                    <Text style={{fontFamily:"outfit"}}>Total Chapter: 34</Text>
                    <Text style={{fontFamily:"outfit-bold"}}>{course?.item?.teacher}</Text>
                </View>
                <View>
                    <Text style={{color:"green",fontFamily:"outfit-bold"}}>{course?.item?.status}</Text>
                </View>
              </View>

              <View>
                <Text style={{fontSize:20,fontFamily:"outfit-bold",marginTop:10,color:Colors.PRIMARY}}>Description</Text>
                <Text style={{fontFamily:"outfit"}} numberOfLines={5} >{course?.item?.desc}</Text>
              </View>

          <View>
            <FlatList data={categories}
            horizontal={true}
            renderItem={(index,item)=>{
 return(
    <TouchableOpacity  style={[styles.categoryContainer,activeCategory === index ? { borderColor: Colors.PRIMARY,borderWidth:2 }:{borderWidth:2,borderColor:"white"}]} onPress={()=>setactiveCategory(index)}   >
    
    <Image  source={{uri:item?.logo}}  style={{width:50,height:50,objectFit:"contain",borderRadius:55,}} />
    <Text style={{textAlign:"center",marginTop:2}}>{item?.name}</Text>
</TouchableOpacity>
 )
            }}
            /> 
          </View>

 
            </View>
          )
    }
 
 

const styles=StyleSheet.create({
    video:{
        width:"100%",
        height:250
    },
    categoryContainer:{
        
        padding:20,margin:10,backgroundColor:"#fff",display:"flex",gap:3,borderRadius:15,
    }
})