import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, ScrollView, Text, View, StatusBar } from 'react-native'
import Header from "../../component/header"
import homeStyle from '../../styles/main/home'

const path = "../../assets/images/main/"
export const HomeScreen = (props) => {
    return (
        <View style={homeStyle.form}>
            <StatusBar style="auto"></StatusBar>
            <Header userFullName = {props.userFullName}></Header>
            <View style={homeStyle.content}>
                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "/home/scheduleIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}>Votre journée</Text>
                    </View>
                    <ScrollView style={homeStyle.blockContent} showsVerticalScrollIndicator={false}>
                        <Text style={homeStyle.txt}> Rien de prévu aujourd'hui </Text>
                    </ScrollView>
                </View>

                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "/home/trendingIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}>Services Populaires</Text>
                    </View>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={homeStyle.blockContent}>
                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/beauty.png")} style={homeStyle.img} blurRadius={2}></Image>
                            <Text style={homeStyle.txtOnImg}> Coiffure </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/assistance.png")} style={homeStyle.img} blurRadius={2}></Image>
                            <Text style={homeStyle.txtOnImg}> Mécanicien </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/food.png")} style={homeStyle.img} blurRadius={2}></Image>
                            <Text style={homeStyle.txtOnImg}> Healthy </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <View style={homeStyle.block}>
                    <View style={homeStyle.title}>
                        <Image source={require(path + "/home/userIcon.png")} style={homeStyle.titleIcon}></Image>
                        <Text style={homeStyle.titleTxt}> Particuliers en tendances </Text>
                    </View>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={homeStyle.blockContent}>
                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/assistance.png")} style={homeStyle.img} blurRadius={2}></Image>
                            <Text style={homeStyle.txtOnImg}> Maria DaSilva </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/beauty.png")} style={homeStyle.img} blurRadius={2}></Image>
                            <Text style={homeStyle.txtOnImg}> John Dupont </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={homeStyle.button}> 
                            <Image source={require(path + "/category/domestique.png")} style={homeStyle.img} blurRadius={3}></Image>
                            <Text style={homeStyle.txtOnImg}> Mark Zaker </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

