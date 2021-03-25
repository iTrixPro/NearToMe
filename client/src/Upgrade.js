import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Login = () => {

    const [selectedCateg, setSelectedCateg] = useState();
    const [selectedSubcateg, setSelectedSubcateg] = useState();

    return (
        <View style={{ height: "100%", width: "100%", alignItems: "center", paddingTop: 100, backgroundColor: "#fff9f9" }}>
            <View style={{ height: "100%", width: "80%" }}>
                <TouchableOpacity style={{ height: "10%", width: "100%", position: "relative", justifyContent: "center" }}>
                    <Text style={{ color: "#1e1e1e", textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Devnir un particulier</Text>
                    <Image source={require("../assets/NTM/arrow.png")} style={{ height: 33, width: 33, marginLeft: "auto", right: 10, position: "absolute", transform: [{ rotate: "180deg" }] }}></Image>
                </TouchableOpacity>
                <Image source={require("../assets/NTM/registerIcon.png")} style={{ alignSelf: "center", marginBottom: 50 }}></Image>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Nom du service</Text>
                <TextInput style={{ height: "5%", width: "100%", textAlign: "center", color: "#1e1e1e", borderBottomWidth: 3, borderBottomColor: "black", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Catégorie</Text>
                <Picker
                    selectedValue={selectedCateg}
                    onValueChange={(itemValue, itemIndex) => setSelectedCateg(itemValue)}
                    style={{ height: "5%", width: "100%", color: "#1e1e1e" }}>
                    <Picker.Item label="categ-1" value="categ-1" />
                    <Picker.Item label="categ-2" value="categ-2" />
                    <Picker.Item label="categ-3" value="categ-3" />
                </Picker>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Sous-catégorie</Text>
                <Picker
                    selectedValue={selectedSubcateg}
                    onValueChange={(itemValue, itemIndex) => setSelectedSubcateg(itemValue)}
                    style={{ height: "5%", width: "100%", color: "#1e1e1e" }}>
                    <Picker.Item label="sous-categ-1" value="sous-categ-1" />
                    <Picker.Item label="sous-categ-2" value="sous-categ-2" />
                    <Picker.Item label="sous-categ-3" value="sous-categ-3" />
                </Picker>
                <View style={{ height: "25%", width: "100%", justifyContent: "center", marginTop: 100 }}>
                    <TouchableOpacity style={{ height: "41%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "#1e1e1e", borderRadius: 50 }}>
                        <Text style={{ color: "#fff9f9", fontWeight: "bold", fontSize: 30 }}>Valider</Text>
                        <Image source={require("../assets/NTM/proceedLight.png")} style={{ height: 33, width: 33, position: "absolute", right: 10 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ color: "#fff9f9", fontSize: 12, textAlign: "center", paddingTop: 10 }}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;