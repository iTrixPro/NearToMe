import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Header from "./Header";
import homeStyle from '../styles/home/home';

const path = "../assets/images/home/";
const Login = () => {

    return (
        <View style={homeStyle.form}>
            <Header></Header>
            <View style={homeStyle.content}>
                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "scheduleIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}>Votre journée</Text>
                    </View>
                    <ScrollView style={homeStyle.blockContent}>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                        <Text style={homeStyle.txt}>hh:mm | categorie, prestataire</Text>
                    </ScrollView>
                </View>
                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "trendingIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}>Services Populaires</Text>
                    </View>
                    <ScrollView horizontal={true} style={homeStyle.blockContent}>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                    </ScrollView>
                </View>
                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "userIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}>Particulier en tendances</Text>
                    </View>
                    <ScrollView horizontal={true} style={homeStyle.blockContent}>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                        <Image source={require(path + "placeholder.png")} style={homeStyle.hImg}></Image>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default Login;