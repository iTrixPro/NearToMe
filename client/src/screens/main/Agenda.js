import React from 'react'
import { Image, ScrollView, Text, View, StatusBar } from 'react-native'
import Header  from '../../component/header'
import agendaStyle from '../../styles/main/agenda'

const path = "../../assets/images/main/agenda/"
export const AgendaScreen = (props) => {
    return (
        <View style={agendaStyle.container}>
            <Header userFullName = {props.userFullName}></Header>
            <View style={agendaStyle.headContainer}>
                <View style={agendaStyle.head}>
                    <Image source={require(path + "icon.png")} style={agendaStyle.icon}></Image>
                    <Text style={agendaStyle.title}>Mes rendez-vous</Text>
                </View>
                <View style={agendaStyle.bar}></View>
            </View>
            <View style={agendaStyle.block}>
                <ScrollView style={agendaStyle.scrollContain} showsVerticalScrollIndicator={false}>
                    <View style={agendaStyle.textArea}>
                      <Text style={agendaStyle.date}> Aujourd'hui </Text>
                      <Text style={agendaStyle.txt}> 15 : 30 | Travaux domestiques "Au cheveux doux" </Text>
                    </View>
                     
                    <View style={agendaStyle.textArea}>
                      <Text style={agendaStyle.date}> Demain </Text>
                      <Text style={agendaStyle.txt}> 11 : 00 | Beauté "Au cheveux doux" </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}