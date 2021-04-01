import React, {useState} from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import registerStyle from '../../styles/authentication/register'
import { clearInputs } from "../../utils/utils";

const ip_address = "192.168.1.20"
const path = "../../assets/images/authentication/register/"

let inputs = {
    firstName : null, 
    lastName : null,
    phone : null,
    email : null,
    password : null
}

export default Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [phone, setPhone] = useState('')
    const data = {"email" : email, "pwd" : password, "lastname" : lastName, "firstname" : firstName, "phone" : phone}
    
    return (
        <View style={registerStyle.form}>
            <View style={registerStyle.content}>
                <TouchableOpacity style={registerStyle.sliderButton}>
                    <Text style={registerStyle.sliderButtonTxt}>Créer un compte</Text>
                    <Image source={require(path + "arrow.png")} style={registerStyle.sliderButtonIcon}></Image>
                </TouchableOpacity>
                <Image source={require(path + "registerIcon.png")} style={registerStyle.icon}></Image>
                <Text style={registerStyle.text}>Prénom</Text>
                <TextInput  
                    ref={input => {inputs.firstName = input}}
                    value={firstName}
                    onChangeText={(text) => setFirstName(text.trim())}
                    style={registerStyle.input}>
                </TextInput>
                <Text style={registerStyle.text}>Nom</Text>
                <TextInput  
                    ref={input => {inputs.lastName = input}}
                    value={lastName}
                    onChangeText={(text) => setName(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                
                <Text style={registerStyle.text}>Téléphone</Text>
                <TextInput  
                    ref={input => {inputs.phone = input}}
                    keyboardType='phone-pad'
                    maxLength={10}
                    value={phone}
                    onChangeText={(text) => setPhone(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                  
                <Text style={registerStyle.text}>Adresse mail</Text>
                <TextInput  
                    ref={input => {inputs.email = input}}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => setEmail(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                
                <Text style={registerStyle.text}>Mot de passe</Text>
                <View style={registerStyle.passwordSection}>
                <TextInput 
                    ref={input => {inputs.password = input}}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text.trim())}
                    style={registerStyle.passwordInput}>
                </TextInput>                   
                <TouchableOpacity style={registerStyle.passwordHideButton}>
                        <Image source={require(path + "hideDark.png")} style={registerStyle.passwordHideButtonIcon}></Image>
                </TouchableOpacity>
                </View>
                <View style={registerStyle.registerButtonArea}>
                    <TouchableOpacity style={registerStyle.registerButton}  onPress={() => { 
                        register(data, props.pannel)
                        }}>
                        <Text style={registerStyle.registerButtonTxt}>S'inscrire</Text>
                        <Image source={require(path + "proceedLight.png")} style={registerStyle.registerButtonIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const register = async (data, pannel) => {
    fetch("http://" + ip_address + ":4547/NearToMe/signup",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": data["email"],
            "password": data["pwd"],
            "name": data["lastname"],
            "firstName": data["firstname"],
            "phone": data["phone"]
        }),
    }).then((response) => {return response.json()})
      .then(responseJSON => {
        if(!responseJSON.valid) {
            Alert.alert("ERREUR", responseJSON.message)
        } else {
            pannel.hide()
            clearInputs(inputs)
        }
        
    }).catch((error) => {
        console.log(error)
    })
}
