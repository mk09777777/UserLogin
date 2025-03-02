import React, { Fragment, useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import Signstyles from "../styles/sign";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../components/firebaseconfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
export default function Login(){
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const navigation = useNavigation();

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('card');
        })
        .catch((error) => Alert.alert('Error', error.message));
    };
  
    const handleForgetPassword = () => {
      if (email) {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            Alert.alert('Success', 'Password reset email sent. Check your inbox!');
          })
          .catch((error) => {
            Alert.alert('Error', error.message);
          });
      } else {
        Alert.alert('Error', 'Please enter your email address');
      }
    };

    return(
        <>
        <Fragment>
      <ImageBackground
        source={require("../assests/background.jpg")}
        style={Signstyles.backgroundimage}
      >
       
        
        <View style={Signstyles.logincontainer}>
            
          <Text style={Signstyles.heading1}>Welcome,</Text>
          <Text style={Signstyles.namelabel}>Email ID</Text>
          <TextInput
            value={email}
            onChangeText={setemail}
            textContentType="emailAddress"
            keyboardType="email-address"
            style={Signstyles.namesignin}
            placeholder="Enter email id"
            placeholderTextColor={"rgba(110, 110, 110, 0.53)"}
          />
           <Text style={Signstyles.emaillabel}>Password</Text>
          <TextInput
          secureTextEntry
            value={password}
            onChangeText={setpassword}
            textContentType="password"
            keyboardType="default"
            style={Signstyles.emailsignin}
            placeholder="Enter password"
            placeholderTextColor={"rgba(110, 110, 110, 0.53)"}
          />
          <TouchableOpacity onPress={handleForgetPassword} >
            <Text style={Signstyles.forgetpassword}>Forget password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} >
            <View style={Signstyles.signupbutton}>
              <Text style={Signstyles.signup}>Login</Text>
              <Image source={require("../assests/whiteicon.png")} />
            </View>
          </TouchableOpacity >
          <Text style={Signstyles.donthave}>Dont have an account?
            <TouchableOpacity onPress={()=>navigation.navigate("signup")} >
<Text style={Signstyles.clickhere}>click here</Text>
</TouchableOpacity></Text>
        </View>
   
      </ImageBackground>
    </Fragment>
        </>
    )
}
