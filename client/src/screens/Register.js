import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import registerStyle from '../styles/authentication/register'

const path = "../assets/images/authentication/register/"
export default Register = () => {
    return (
        <View style={registerStyle.form}>
            <View style={registerStyle.content}>
                <TouchableOpacity style={registerStyle.sliderButton}>
                    <Text style={registerStyle.sliderButtonTxt}>Créer un compte</Text>
                    <Image source={require(path + "arrow.png")} style={registerStyle.sliderButtonIcon}></Image>
                </TouchableOpacity>
                <Image source={require(path + "registerIcon.png")} style={registerStyle.icon}></Image>
                <Text style={registerStyle.text}>Prénom</Text>
                <TextInput style={registerStyle.input}></TextInput>
                <Text style={registerStyle.text}>Nom</Text>
                <TextInput style={registerStyle.input}></TextInput>
                <Text style={registerStyle.text}>Téléphone</Text>
                <TextInput style={registerStyle.input}></TextInput>
                <Text style={registerStyle.text}>Adresse mail</Text>
                <TextInput style={registerStyle.input}></TextInput>
                <Text style={registerStyle.text}>Mot de passe</Text>
                <View style={registerStyle.passwordSection}>
                    <TextInput secureTextEntry={true} style={registerStyle.passwordInput}></TextInput>
                    <TouchableOpacity style={registerStyle.passwordHideButton}>
                        <Image source={require(path + "hideDark.png")} style={registerStyle.passwordHideButtonIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={registerStyle.registerButtonArea}>
                    <TouchableOpacity style={registerStyle.registerButton}>
                        <Text style={registerStyle.registerButtonTxt}>S'inscrire</Text>
                        <Image source={require(path + "proceedLight.png")} style={registerStyle.registerButtonIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}