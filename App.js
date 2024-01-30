import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';
import Colors from './App/Utils/Colors';
import { useEffect } from 'react';
import { client } from './App/Utils/KindConfig';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';




export const AuthContext = createContext()
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),

  });



  const [auth, setauth] = useState(false)
  const checkAuthenticate = async () => {

    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
     
      setauth(true)
      console.log("Authenticated")
    } else {
      setauth(false)

    }
  };

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);








  return (



    <View style={styles.container}>
      {/* <Login/> */}
   
    <AuthContext.Provider value={{ auth, setauth }}>

<NavigationContainer  >
  {
    auth ? <TabNavigation /> : <ScrollView><Login /></ScrollView> 

  }
</NavigationContainer>

</AuthContext.Provider>

    

     


      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 20, width: "100%", height: "100%"
  },
  paragraph: {
    color: "white"
  },
});
