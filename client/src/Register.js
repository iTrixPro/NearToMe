import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

const Register = () => {
    return (
        <View style={{ height: "98%", width: "100%", backgroundColor: "#fff9f9", alignItems: "center", borderTopLeftRadius: 50, borderTopRightRadius: 50, position: "absolute", bottom: 0 }}>
            <View style={{ height: "100%", width: "80%" }}>
                <TouchableOpacity style={{ height: "10%", width: "100%", position: "relative", justifyContent: "center" }}>
                    <Text style={{ color: "#1e1e1e", textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Créer un compte</Text>
                    <Image source={require("../assets/NTM/arrow.png")} style={{ height: 33, width: 33, marginLeft: "auto", right: 10, position: "absolute" }}></Image>
                </TouchableOpacity>
                <Image source={require("../assets/NTM/registerIcon.png")} style={{ alignSelf: "center", marginBottom: 50 }}></Image>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Prénom</Text>
                <TextInput style={{ height: "5%", width: "100%", textAlign: "center", color: "#1e1e1e", borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Nom</Text>
                <TextInput style={{ height: "5%", width: "100%", textAlign: "center", color: "#1e1e1e", borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Téléphone</Text>
                <TextInput style={{ height: "5%", width: "100%", textAlign: "center", color: "#1e1e1e", borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Adresse mail</Text>
                <TextInput style={{ height: "5%", width: "100%", textAlign: "center", color: "#1e1e1e", borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#bebebe", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Mot de passe</Text>
                <View style={{ height: "5%", width: "100%", position: "relative" }}>
                    <TextInput style={{ height: "100%", width: "100%", textAlign: "center", color: "#1e1e1e", position: "relative", borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 11 }}></TextInput>
                    <TouchableOpacity style={{ height: "100%", justifyContent: "center", position: "absolute", zIndex: 9999, right: 10 }}>
                        <Image source={require("../assets/NTM/hideDark.png")} style={{ height: 19, width: 19 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: "25%", width: "100%", justifyContent: "center" }}>
                    <TouchableOpacity style={{ height: "41%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "#1e1e1e", borderRadius: 50 }}>
                        <Text style={{ color: "#fff9f9", fontWeight: "bold", fontSize: 30 }}>S'inscrire</Text>
                        <Image source={require("../assets/NTM/proceedLight.png")} style={{ height: 33, width: 33, position: "absolute", right: 10 }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Register;