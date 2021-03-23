import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
    return (
        <View style={{ height: "90%", width: "100%", alignItems: "center", paddingTop: 100 }}>
            <View style={{ height: "100%", width: "90%" }}>
                <Image source={require("../assets/NTM/loginIcon.png")} style={{ alignSelf: "center", marginBottom: 50 }}></Image>
                <Text style={{ color: "#fff9f9", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Adresse mail</Text>
                <TextInput style={{ height: "10%", width: "100%", textAlign: "center", color: "#fff9f9", backgroundColor: "#efa9a9", borderRadius: 11, marginBottom: 10 }}></TextInput>
                <Text style={{ color: "#fff9f9", alignSelf: "flex-start", paddingLeft: 10, fontSize: 19 }}>Mot de passe</Text>
                <View style={{ height: "10%", width: "100%", position: "relative" }}>
                    <TextInput style={{ height: "100%", width: "100%", textAlign: "center", color: "#fff9f9", position: "relative", backgroundColor: "#efa9a9", borderRadius: 11 }}></TextInput>
                    <TouchableOpacity style={{ height: "100%", justifyContent: "center", position: "absolute", zIndex: 9999, right: 10 }}>
                        <Image source={require("../assets/NTM/hideLight.png")} style={{ height: 19, width: 19 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: "25%", width: "100%", justifyContent: "center", marginTop: 100 }}>
                    <TouchableOpacity style={{ height: "41%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "#fff9f9", borderRadius: 50 }}>
                        <Text style={{ color: "#1e1e1e", fontWeight: "bold", fontSize: 30 }}>Se connecter</Text>
                        <Image source={require("../assets/NTM/proceedDark.png")} style={{ height: 33, width: 33, position: "absolute", right: 10 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ color: "#fff9f9", fontSize: 12, textAlign: "center", paddingTop: 10 }}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;