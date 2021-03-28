import React,{useState}  from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import loginStyle from '../styles/authentication/login'

const path = "../assets/images/authentication/login/"
const Login = (props) => {

    const [email,setEmail] =  useState('');
  const [password,setPassword]= useState('')
    
  
  const sendCred = async (props)=>{
    fetch("http://192.168.1.25:4547/NearToMe/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.response())
    .then(async (data)=>{
           try {
           } catch (e) {
             console.log("error ",e)
              Alert(e)
           }
    })}
    return (
        <View style={loginStyle.form}>
            <View style={loginStyle.content}>
                <Image source={require(path + "loginIcon.png")} style={loginStyle.icon}></Image>
                <Text style={loginStyle.txt}>Adresse mail</Text>
                <TextInput value={email} 
                    style={loginStyle.mailInput} 
                    onChangeText={(text)=>setEmail(text.trim())}>
                </TextInput>
                <Text style={loginStyle.txt}>Mot de passe</Text>
                <View style={loginStyle.pwdSection}>
                    <TextInput secureTextEntry={true} 
                        value={password}
                        onChangeText={(text)=>{setPassword(text.trim())}} 
                        style={loginStyle.pwdInput} >
                    </TextInput>
                    <TouchableOpacity style={loginStyle.hidePwdButton}>
                        <Image source={require(path + "hideLight.png")} style={loginStyle.hidePwdIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={loginStyle.loginButtonSection} >
                    <TouchableOpacity style={loginStyle.loginButton}   onPress={() => sendCred(props)}>
                        <Text style={loginStyle.loginButtonText}>Se connecter</Text>
                        <Image source={require(path + "proceedDark.png")} style={loginStyle.loginButtonIcon} ></Image>
                    </TouchableOpacity>
                    <Text style={loginStyle.forgetPwdText}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;