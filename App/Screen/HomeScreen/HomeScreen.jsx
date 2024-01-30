import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { client } from '../../Utils/KindConfig';
import { AuthContext } from '../../../App';
import Header from '../../components/Header';

export default function HomeScreen() {
  const {auth,setauth}=useContext(AuthContext)
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setauth(false)
       console.log("Logout user")
    }
};
  return (
    <View style={{padding:10}}>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={handleLogout} />
      <Header/>
    </View>
  )
}