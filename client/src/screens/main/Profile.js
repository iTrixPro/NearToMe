import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Header from "../../component/header"
import profileStyle from '../../styles/main/profile'

import { createStackNavigator } from '@react-navigation/stack'
import { ScreenHelp } from '../sub-screens/profile/help'
import { ScreenFavorite } from '../sub-screens/profile/favorite'
import { ScreenPayement } from '../sub-screens/profile/payement'
import { ScreenSettings } from '../sub-screens/profile/settings'
import { ScreenUpgrade } from '../sub-screens/profile/upgrade'

const path = "../../assets/images/main/profile/"
const Stack = createStackNavigator()
export const ProfileScreen = (props) => {
    return (
        <Stack.Navigator screenOptions = {{ headerShown : false }}>
            <Stack.Screen name="profile" children={() => <Screen navigation = {props.navigation} userFullName = {props.userFullName}/>}/>
            <Stack.Screen name="help" component={ScreenHelp}/>
            <Stack.Screen name="favorite" children={() => <ScreenFavorite userFullName = {props.userFullName}/>}/>
            <Stack.Screen name="payement" children={() => <ScreenPayement userFullName = {props.userFullName}/>}/>
            <Stack.Screen name="settings" children={() => <ScreenSettings userFullName = {props.userFullName}/>}/>
            <Stack.Screen name="upgrade" component={ScreenUpgrade}/>
        </Stack.Navigator>
    )
}

const Screen = (props) => {
    return (
        <View style={profileStyle.screen}>
            <Header userFullName = {props.userFullName}></Header>
            <View style={profileStyle.container}>
                <TouchableOpacity style={profileStyle.block} onPress = {() => {
                    props.navigation.navigate('help')
                }}>
                    <Image source={require(path + "info.png")} style={profileStyle.icon}></Image>
                    <Text style={profileStyle.h1}>Aide</Text>
                </TouchableOpacity>

                <TouchableOpacity style={profileStyle.block} onPress = {() => {
                    props.navigation.navigate('favorite')
                }}>
                    <Image source={require(path + "favorite.png")} style={profileStyle.icon}></Image>
                    <Text style={profileStyle.h1}>Favoris</Text>
                </TouchableOpacity>

                <TouchableOpacity style={profileStyle.block} onPress = {() => {
                    props.navigation.navigate('payement')
                }}>
                    <Image source={require(path + "payement.png")} style={profileStyle.icon}></Image>
                    <Text style={profileStyle.h1}>Moyens de paiement</Text>
                </TouchableOpacity>

                <TouchableOpacity style={profileStyle.block} onPress= {() => {
                    props.navigation.navigate('settings')
                }}>
                    <Image source={require(path + "settings.png")} style={profileStyle.icon}></Image>
                    <Text style={profileStyle.h1}> Paramètre </Text>
                </TouchableOpacity>

                <TouchableOpacity style={profileStyle.blockParticulier} onPress = {() => {
                    props.navigation.navigate('upgrade')
                }}>
                    <Text style={profileStyle.h1Particulier}>Devenir Particulier !</Text>
                    <Text style={profileStyle.pBold}>Vous aussi vous avez un service à proposer ?</Text>
                    <Text style={profileStyle.p}>Devenez Particulier et faite connaissance avec nos millions d'utilisateurs.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}