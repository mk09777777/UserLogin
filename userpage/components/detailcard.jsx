import React, { Fragment, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList, Alert, ScrollView } from "react-native";
import Cardstyles from "../styles/card";
import { auth, firestore } from "../components/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Card() {
    const [userData, setUserData] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (!user) {
                Alert.alert("Error", "User not authenticated");
                return;
            }
            try {
                const userDocRef = doc(firestore, "userdetails", user.uid);
                const userSnapshot = await getDoc(userDocRef);
                if (userSnapshot.exists()) {
                    setUserData(userSnapshot.data());
                }
            } catch (error) {
                Alert.alert("Error", error.message);
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.replace("login");
        } catch (error) {
            Alert.alert("Error", "Failed to logout. Try again.");
        }
    };

    if (!userData) {
        return <Text>Loading...</Text>;
    }

    return (
        <Fragment>
          <ScrollView>
          <View style={Cardstyles.background}>
                <View style={Cardstyles.headingcontainer}>
                    <Text style={Cardstyles.profilecard}>Profile card</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Image style={Cardstyles.logoutimg} source={require("../assests/singout.png")} />
                    </TouchableOpacity>
                </View>
                <View style={Cardstyles.Card}>
                    <Image style={Cardstyles.profileimg} source={require("../assests/profileimg.png")} />
                    <Text style={Cardstyles.T1}>{userData.name}</Text>
                    <Text style={Cardstyles.T2}>{userData.email}</Text>
                    <Text style={Cardstyles.T12}>Personal Details</Text>
                    <View style={Cardstyles.personalcontainer}>
                        <Image style={Cardstyles.logo} source={require("../assests/gender.png")} />
                        <Text style={Cardstyles.P1}>Gender :</Text>
                        <Text style={Cardstyles.P1}>{userData.gender}</Text>
                    </View>
                    <View style={Cardstyles.personalcontainer2}>
                        <Image style={Cardstyles.logo} source={require("../assests/user.png")} />
                        <Text style={Cardstyles.P12}>Religion :</Text>
                        <Text style={Cardstyles.P12}>{userData.race}</Text>
                    </View>
                    <View style={Cardstyles.personalcontainer3}>
                        <Image style={Cardstyles.logo} source={require("../assests/birth.png")} />
                        <Text style={Cardstyles.P12}>DOB :</Text>
                        <Text style={Cardstyles.P12}>{userData.birthDate}</Text>
                    </View>
                    <Text style={Cardstyles.T12}>Dietary Preferences</Text>
                    <FlatList
                        data={userData.dietaryPreferences}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={Cardstyles.Dietarycontainer}>
                                <Text style={Cardstyles.dietaryText}>{item}</Text>
                            </View>
                        )}
                    />
                    <Text style={Cardstyles.T12}>Allergies</Text>
                    <FlatList
                        data={userData.allergies}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={Cardstyles.Dietarycontainer2}>
                                <Image style={Cardstyles.dangerLogo} source={require("../assests/danger.png")} />
                                <Text style={Cardstyles.dietaryText2}>{item}</Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate("edit")}>
                    <View style={Cardstyles.logoutbutton}>
                        <Image
                        style={Cardstyles.outLogo}
                        source={require("../assests/editw.png")}
                        />
                        <Text style={Cardstyles.LogoutText}>Edit</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor:"white",marginTop:30}}></View>
          </ScrollView>
        </Fragment>
    );
}
