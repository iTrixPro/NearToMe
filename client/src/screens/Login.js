import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import loginStyle from '../styles/authentication/login'

const path = "../assets/images/authentication/login/"
const Login = () => {
    return (
        <View style={loginStyle.form}>
            <View style={loginStyle.content}>
                <Image source={require(path + "loginIcon.png")} style={loginStyle.icon}></Image>
                <Text style={loginStyle.txt}>Adresse mail</Text>
                <TextInput style={loginStyle.mailInput}></TextInput>
                <Text style={loginStyle.txt}>Mot de passe</Text>
                <View style={loginStyle.pwdSection}>
                    <TextInput style={loginStyle.pwdInput}></TextInput>
                    <TouchableOpacity style={loginStyle.hidePwdButton}>
                        <Image source={require(path + "hideLight.png")} style={loginStyle.hidePwdIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={loginStyle.loginButtonSection}>
                    <TouchableOpacity style={loginStyle.loginButton}>
                        <Text style={loginStyle.loginButtonText}>Se connecter</Text>
                        <Image source={require(path + "proceedDark.png")} style={loginStyle.loginButtonIcon}></Image>
                    </TouchableOpacity>
                    <Text style={loginStyle.forgetPwdText}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;