import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import Loginstyles from "../styles/login";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, firestore } from "../components/firebaseconfig";
import { doc,setDoc } from "@firebase/firestore";
export default function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()
const savetofirestore =async(uid,name,email,password)=>{
  const userDocRef = doc(firestore,"userdetails",uid);
  await setDoc(userDocRef,{name,email,password})
}
    const handlesignup=async()=>{
      if(!name||!email||!password){
        Alert.alert("Error","Please fill in all fields.");
        return;
      }
      try{
        const usercredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = usercredential.user;
        await savetofirestore(user.uid,name,email,password)
        await sendEmailVerification(user);
        Alert.alert(
          "Success",
          "A verification email has been sent , please verify it to proceed."
        );
        setEmail("")
        setName("")
        setPassword("");
        navigation.navigate("details");
      }
      catch(error){
        Alert.alert("Error",error.message);
      }
     
    }
    return(
        <Fragment>
        <ImageBackground
          source={require("../assests/background.jpg")}
          style={Loginstyles.backgroundimage}
        >
          <View style={Loginstyles.logincontainer}>
          <Text style={Loginstyles.heading1}>Welcome,</Text>
          <Text style={Loginstyles.namelabel}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              textContentType="name"
              style={Loginstyles.namesignin}
              placeholder="Enter your name"
              placeholderTextColor={"rgba(110, 110, 110, 0.53)"}
            />
            <Text style={Loginstyles.emaillabel}>Email ID</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              textContentType="emailAddress"
              style={Loginstyles.emailsignin}
              placeholder="Enter your email id"
              placeholderTextColor={"rgba(110, 110, 110, 0.53)"}
            />
              <Text style={Loginstyles.emaillabel}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              textContentType="password"
              secureTextEntry
              style={Loginstyles.emailsignin}
              placeholder="Enter your password"
              placeholderTextColor={"rgba(110, 110, 110, 0.53)"}
            />
            <TouchableOpacity onPress={handlesignup} >
              <View style={Loginstyles.signupbutton}>
                <Text style={Loginstyles.signup}>Proceed</Text>
                <Image source={require("../assests/whiteicon.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <View style={Loginstyles.loginbutton}>
              <Text style={Loginstyles.login}>Login</Text>
              <Image source={require("../assests/doubleforward.png")} />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </Fragment>
    )}