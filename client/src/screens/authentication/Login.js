import React, { useState }  from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import loginStyle from '../../styles/authentication/login'

const ip_address = "192.168.1.20"
const path = "../../assets/images/authentication/login/"

//const [message, setMessage] = useState([])
export default Login = (props) => {
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    
    let data = { "email": email, "pwd" : password}
    return (
        <View style={loginStyle.form}>
            <View style={loginStyle.content}>
                <Image source={require(path + "loginIcon.png")} style={loginStyle.icon}></Image>
                <Text style={loginStyle.txt}>Adresse mail</Text>
                <TextInput value={email} 
                    style={loginStyle.mailInput} 
                    onChangeText={(text) => setEmail(text.trim())}>
                </TextInput>
                <Text style={loginStyle.txt}>Mot de passe</Text>
                <View style={loginStyle.pwdSection}>
                    <TextInput 
                        secureTextEntry={true} 
                        value={password}
                        onChangeText={(text) => {setPassword(text.trim())}} 
                        style={loginStyle.pwdInput} >
                    </TextInput>
                    <TouchableOpacity style={loginStyle.hidePwdButton}>
                        <Image source={require(path + "hideLight.png")} style={loginStyle.hidePwdIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={loginStyle.loginButtonSection} >
                    <TouchableOpacity style={loginStyle.loginButton}   onPress={() => {
                            if (!email) {
                                Alert.alert('ERREUR', "vous devez saisir votre adresse e-mail !")
                            } else if (!password) {
                                Alert.alert('ERREUR', "vous devez saisir votre mot de passe !")
                            } else {
                                logIn(data, props.navigator)
                            }
                        }}>
                        <Text style={loginStyle.loginButtonText}>Se connecter</Text>
                        <Image source={require(path + "proceedDark.png")} style={loginStyle.loginButtonIcon} ></Image>
                    </TouchableOpacity>
                    <Text style={loginStyle.forgetPwdText}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

const logIn = async (data, navigation) => {
    fetch("http://" + ip_address + ":4547/NearToMe/signin", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "email":data["email"],
            "password":data["pwd"]
        })
    }).then(response => {return response.json()})
      .then(responseJSON => {
          if(!responseJSON.valid) {
              Alert.alert("ERREUR", responseJSON.message)
          } else {
            navigation.navigate('Main', {"name": responseJSON.name})
          }
        }).catch (error => console.log(error))
}
