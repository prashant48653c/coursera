import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Loginscreen/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40A2D8',
    paddingTop:20
  },
  paragraph: {
   color:"white"
  },
});
