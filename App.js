import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';
import Colors from './App/Utils/Colors';
import { useEffect } from 'react';
import { client } from './App/Utils/KindConfig';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';


 
 


export default function App() {

  const checkAuthenticate = async () => {
    
    if (await client.isAuthenticated) {
        // Need to implement, e.g: call an api, etc...
        const userProfile = await client.getUserDetails();
console.log(userProfile);
        console.log("Authenticated")
    } else {
        return <Login/>
    }
};

useEffect(() => {
    checkAuthenticate();
}, []);
 







  return (
    
  
   
    <View style={styles.container}>
      {/* <Login/> */}

 
         
     <NavigationContainer  >
      <TabNavigation/>
      </NavigationContainer>     
     
      
      <StatusBar style="auto" />
    </View>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop:20,width:"100%",height:"100%"
  },
  paragraph: {
   color:"white"
  },
});
