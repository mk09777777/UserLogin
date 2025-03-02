import React, { Fragment, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Detailstyles from "../styles/details";
import DropDownPicker from "react-native-dropdown-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { auth, firestore } from "../components/firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Editdetails() {
    const [open, setOpen] = useState(false);
    const [race, setRace] = useState(null);
    const [date, setDate] = useState(new Date());
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedDietary, setSelectedDietary] = useState([]);
    const [selectedAlergies, setSelectedAlergies] = useState([]);
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
                    const data = userSnapshot.data();
                    setRace(data.race || null);
                    setDate(data.birthDate ? new Date(data.birthDate) : new Date());
                    setSelectedGender(data.gender || null);
                    setSelectedDietary(data.dietaryPreferences || []);
                    setSelectedAlergies(data.allergies || []);
                }
            } catch (error) {
                Alert.alert("Error", error.message);
            }
        };
        fetchUserData();
    }, []);

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            mode: "date",
            display: "calendar",
            onChange: (event, selectedDate) => {
                if (selectedDate) setDate(selectedDate);
            },
        });
    };

    const toggleSelection = (item, selectedItems, setSelectedItems) => {
        setSelectedItems(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    const submitData = async () => {
        const user = auth.currentUser;
        if (!user) {
            Alert.alert("Error", "User not authenticated");
            return;
        }
        try {
            const userDocRef = doc(firestore, "userdetails", user.uid);
            await updateDoc(userDocRef, {
                race,
                gender: selectedGender,
                birthDate: date.toDateString(),
                dietaryPreferences: selectedDietary,
                allergies: selectedAlergies,
            });
            navigation.navigate("card");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <Fragment>
            <ScrollView style={Detailstyles.background}>
                <Text style={Detailstyles.H1}>Tell us about yourself</Text>
                <Text style={Detailstyles.P1}>This helps us personalize your experience</Text>
                <Text style={Detailstyles.P2}>Race</Text>
                <DropDownPicker
                    open={open}
                    value={race}
                    items={[
                        { label: "Select your race", value: "" },
                        { label: "Hindu", value: "Hindu" },
                        { label: "Muslim", value: "Muslim" },
                        { label: "Asian", value: "Asian" },
                        { label: "Other", value: "Other" },
                    ]}
                    setOpen={setOpen}
                    setValue={setRace}
                    placeholder="Select your religion"
                    style={Detailstyles.picker}
                    dropDownContainerStyle={Detailstyles.dropdown}
                />
                <Text style={Detailstyles.P3}>Gender</Text>
                <FlatList
                    data={["male", "female", "other", "not to say"]}
                    keyExtractor={(item) => item}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setSelectedGender(item)}>
                            <View style={selectedGender === item ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Text style={Detailstyles.gendertext}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={Detailstyles.P2}>Birth Date</Text>
                <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
                    <TextInput style={Detailstyles.date} value={date.toDateString()} editable={false} />
                </TouchableOpacity>
                <Text style={Detailstyles.H2}>Dietary Preferences</Text>
                <Text style={Detailstyles.P12}>help us understand your food choices</Text>
                <Text style={Detailstyles.P22}>Select your dietary prefrences</Text>
                <FlatList
                    data={["vegan", "vegetarian", "keto", "Halal"]}
                    keyExtractor={(item) => item}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => toggleSelection(item, selectedDietary, setSelectedDietary)}>
                            <View style={selectedDietary.includes(item) ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Text style={Detailstyles.gendertext}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={Detailstyles.P22}>Select your allergies</Text>
                <FlatList
                    data={["peanuts", "dairy", "vegies", "eggs"]}
                    keyExtractor={(item) => item}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => toggleSelection(item, selectedAlergies, setSelectedAlergies)}>
                            <View style={selectedAlergies.includes(item) ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Text style={Detailstyles.gendertext}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity onPress={submitData}>
                    <View style={Detailstyles.signupbutton}>
                        <Text style={Detailstyles.signup}>Edit</Text> 
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </Fragment>
    );
}
