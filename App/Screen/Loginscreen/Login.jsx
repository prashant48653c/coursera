import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
 
import { useOAuth } from "@clerk/clerk-expo";
import useWarmUpBrowser from '../../hooks/warmUpBrowser';

const Login = () => {
    WebBrowser.maybeCompleteAuthSession();
useWarmUpBrowser()
 
const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
const HandleGoogle = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 console.log("first")
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

return (
<View style={{ alignItems: "center" }}>
<Image style={styles.loginImage} source={require('./../../../assets/login.png')} />

<View style={styles.subContainer}>
<Text style={{ color: Colors.WHITE, fontSize: 22, textAlign: "center" }}>
Let's find
<Text style={{ fontWeight: 'bold' }} > Professional Clean and Repair Service
</Text>
</Text>
 
<Text style={{ color: Colors.WHITE, fontSize: 15,marginTop:20,textAlign:"center" }} >Best app to get the customer and labourers towards your goal</Text>
<Pressable onPress={HandleGoogle} style={styles.button}>
    <Text style={{textAlign:"center",fontSize:15}}>Get Started</Text>
</Pressable>

</View>
</View>
)
}

const styles = StyleSheet.create({
loginImage: {
width: 230,
height: 450,
borderColor: Colors.BLACK,
borderWidth: 5,
borderRadius: 15,
marginTop: 65

}
, subContainer: {
width: "100%",
backgroundColor: Colors.PRIMARY,
height: "70%",
marginTop: -20,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
padding: 20,
textAlign: "center",
alignItems: "center"
},
button:{
    padding:15,
    paddingRight:40,
    paddingLeft:40,
    borderRadius:15,
    marginTop:20,
    backgroundColor:Colors.WHITE,
    color:Colors.PRIMARY
}
})
export default Login