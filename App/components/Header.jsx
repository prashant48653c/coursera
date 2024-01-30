import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig'
import { AntDesign } from '@expo/vector-icons';





export default function Header() {
const[userDetail,setUserDetail]=useState([])
    const getUserDetail = async () => {
        const user = await client.getUserDetails()
      console.log(user)
        setUserDetail(user)
    }
    useEffect(() => {
        getUserDetail()
    }, [])

    return (
        <>
        <View style={{display:"flex",gap:9,flexDirection:"row",alignItems:"center"}}>
            <Image source={{uri:userDetail?.picture}} 
            style={{width:50,height:50,borderRadius:50}}
            />
            <View>
            <Text style={{fontSize:18}}>Welcome, </Text>
            <Text style={{fontSize:15,fontWeight:600}}>{userDetail?.given_name + " " + userDetail?.family_name}</Text>
            </View>
           
            
        </View>
        <View style={style.input}>
        <AntDesign name="search1" size={20} color="#ccc" />
                <TextInput  placeholder='Search' />
            </View>
    </>
    )
}

const style=StyleSheet.create({
    input:{
        backgroundColor:"#fff",
        fontSize:15,
        paddingVertical:10,
        paddingHorizontal:10,
        display:"flex",
        gap:8,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:30,
        marginVertical:10,
        borderColor:"#ccc",
        borderWidth:2
    }
})