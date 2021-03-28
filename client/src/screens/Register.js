import React,{useState} from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import registerStyle from '../styles/authentication/register'


export default Register = (props) => {
    const path = "../assets/images/authentication/register/"
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const [name,setName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [phone,setPhone]=useState('')

    const sendCred = async (props)=>{
        fetch("http://192.168.1.25:4547/NearToMe/signup",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           "email":email,
           "password":password,
           "name":name,
           "firstName":firstName,
           "phone":phone
         })
        })
        .then(res=>res.json())
        .then(async (data)=>{
               try {
                 props.navigation.replace("home")
               } catch (e) {
                 console.log("error",e)
               }
        })
     }
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
                    value={firstName}
                    onChangeText={(text)=>setFirstName(text.trim())}
                    style={registerStyle.input}>
                </TextInput>
                <Text style={registerStyle.text}>Nom</Text>
                <TextInput  
                    value={name}
                    onChangeText={(text)=>setName(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                
                <Text style={registerStyle.text}>Téléphone</Text>
                <TextInput  
                    value={phone}
                    onChangeText={(text)=>setPhone(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                  
                <Text style={registerStyle.text}>Adresse mail</Text>
                <TextInput  
                    value={email}
                    onChangeText={(text)=>setEmail(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                
                <Text style={registerStyle.text}>Mot de passe</Text>
                <View style={registerStyle.passwordSection}>
                <TextInput  
                    value={password}
                    onChangeText={(text)=>setPassword(text.trim())}
                    style={registerStyle.input}>
                </TextInput>                   
                <TouchableOpacity style={registerStyle.passwordHideButton}>
                        <Image source={require(path + "hideDark.png")} style={registerStyle.passwordHideButtonIcon}></Image>
                </TouchableOpacity>
                </View>
                <View style={registerStyle.registerButtonArea}>
                    <TouchableOpacity style={registerStyle.registerButton}  onPress={() => sendCred(props)}>
                        <Text style={registerStyle.registerButtonTxt}>S'inscrire</Text>
                        <Image source={require(path + "proceedLight.png")} style={registerStyle.registerButtonIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}