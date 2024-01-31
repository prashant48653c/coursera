import { View, Text, FlatList, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import SectionHeading from './SectionHeading'

export default function Categories({categories}) {
   const [activeCategory, setactiveCategory] = useState(0)
    return (
        <>
         <SectionHeading heading={"Category"}/>
      
        <View>
           
          <FlatList showsHorizontalScrollIndicator={false} data={categories} horizontal={true} renderItem={({item,index})=>{
          return ( 
          <TouchableOpacity  style={[styles.categoryContainer,activeCategory === index ? { borderColor: Colors.PRIMARY,borderWidth:2 }:{borderWidth:2,borderColor:"white"}]} onPress={()=>setactiveCategory(index)}   >
    
                <Image  source={{uri:item?.logo}}  style={{width:50,height:50,objectFit:"contain",borderRadius:55,}} />
                <Text style={{textAlign:"center",marginTop:2}}>{item?.name}</Text>
            </TouchableOpacity>)
          }} />
        </View>
        </>
      )
   
 
}

const styles=StyleSheet.create({
    categoryContainer:{
        
        padding:20,margin:10,backgroundColor:"#fff",display:"flex",gap:3,borderRadius:15,
    }
})