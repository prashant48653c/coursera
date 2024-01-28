import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';
import Colors from './App/Utils/Colors';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";


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
        return;
      }
    },
  };








  return (
    <ClerkProvider publishableKey="pk_test_Y2xldmVyLWZlcnJldC05OC5jbGVyay5hY2NvdW50cy5kZXYk"
    tokenCache={tokenCache}
    >


   
    <ScrollView style={styles.container}>
      <Login/>


{/* Signin and Signout components */}
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
      
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
