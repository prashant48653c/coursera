import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';
import Colors from './App/Utils/Colors';
import { ClerkProvider } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {


  //caching functions
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        console.log(err)
      }
    },
  };








  return (
    <ClerkProvider publishableKey="pk_test_Y2xldmVyLWZlcnJldC05OC5jbGVyay5hY2NvdW50cy5kZXYk"
    tokenCache={tokenCache}
    >


   
    <ScrollView style={styles.container}>
      <Login/>

 
        <SafeAreaView style={styles.container}>
        <SignedIn>
        <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
      </SafeAreaView>
      
      <StatusBar style="auto" />
    </ScrollView>

    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop:20
  },
  paragraph: {
   color:"white"
  },
});
