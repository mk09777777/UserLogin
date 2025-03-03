import React, { Fragment, useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Detailstyles from "../styles/details";
import DropDownPicker from "react-native-dropdown-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { auth, firestore } from "../components/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";

export default function Details() {
    const [open, setOpen] = useState(false);
    const [race, setRace] = useState(null);
    const [date, setDate] = useState(new Date());
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedDietary, setSelectedDietary] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const navigation = useNavigation();

    const genderOptions = [
        { name: "male", src: require("../assests/gender.png"), id: 1 },
        { name: "female", src: require("../assests/gender.png"), id: 2 },
        { name: "other", src: require("../assests/gender.png"), id: 3 },
        { name: "not to say", src: require("../assests/gender.png"), id: 4 },
    ];

    const dietaryOptions = [
        { name: "vegan", src: require("../assests/vegan.png"), id: 1 },
        { name: "vegetarian", src: require("../assests/veg.png"), id: 2 },
        { name: "keto", src: require("../assests/keto.png"), id: 3 },
        { name: "Halal", src: require("../assests/fish.png"), id: 4 },
    ];

    const allergiesOptions = [
        { name: "peanuts", src: require("../assests/peanut.png"), id: 1 },
        { name: "dairy", src: require("../assests/milk.png"), id: 2 },
        { name: "veggies", src: require("../assests/gluten.png"), id: 3 },
        { name: "eggs", src: require("../assests/egg.png"), id: 4 },
    ];

    const raceOptions = [
        { label: "Select your race", value: "" },
        { label: "Hindu", value: "Hindu" },
        { label: "Muslim", value: "Muslim" },
        { label: "Asian", value: "Asian" },
        { label: "Other", value: "Other" },
    ];

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
                allergies: selectedAllergies,
            });
            setDate(new Date());
            setRace(null);
            setSelectedGender(null);
            setSelectedAllergies([]);
            setSelectedDietary([]);
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
                    items={raceOptions}
                    setOpen={setOpen}
                    setValue={setRace}
                    placeholder="Select your religion"
                    style={Detailstyles.picker}
                    dropDownContainerStyle={Detailstyles.dropdown}
                />
                <Text style={Detailstyles.P3}>Gender</Text>
                <FlatList
                    data={genderOptions}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setSelectedGender(item.name)}>
                            <View style={selectedGender === item.name ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Image style={Detailstyles.genderimg} source={item.src} />
                                <Text style={Detailstyles.gendertext}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={Detailstyles.P2}>Birth Date</Text>
                <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
                    <TextInput style={Detailstyles.date} value={date.toDateString()} editable={false} />
                </TouchableOpacity>
                <Text style={Detailstyles.H2}>Dietary Preferences</Text>
                <FlatList
                    data={dietaryOptions}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => toggleSelection(item.name, selectedDietary, setSelectedDietary)}>
                            <View style={selectedDietary.includes(item.name) ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Image style={Detailstyles.genderimg} source={item.src} />
                                <Text style={Detailstyles.gendertext}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={Detailstyles.P22}>Select your allergies</Text>
                <FlatList
                    data={allergiesOptions}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => toggleSelection(item.name, selectedAllergies, setSelectedAllergies)}>
                            <View style={selectedAllergies.includes(item.name) ? Detailstyles.genderselect2 : Detailstyles.genderselect}>
                                <Image style={Detailstyles.genderimg} source={item.src} />
                                <Text style={Detailstyles.gendertext}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity onPress={submitData}>
                    <View style={Detailstyles.signupbutton}>
                        <Text style={Detailstyles.signup}>Sign-up</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </Fragment>
    );
}
