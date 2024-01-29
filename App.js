import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';
import Colors from './App/Utils/Colors';
import { useEffect } from 'react';
import { client } from './App/Utils/KindConfig';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';





export const AuthContext = createContext()
export default function App() {
  const [auth, setauth] = useState(false)
  const checkAuthenticate = async () => {

    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
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
            auth ? <TabNavigation /> : <Login />

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
