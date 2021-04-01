import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Header  from '../../component/header'
import agendaStyle from '../../styles/main/agenda'
import { getCalendar } from '../../utils/utils'

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
                    
                      {getDate()}
                      
                </ScrollView>
            </View>
        </View>
    )
}

const getDate = () => {

    const calendar = getCalendar()
    if (calendar.length != 0) {
        return(
            <View style={agendaStyle.textArea}>
                <Text  style = {agendaStyle.date}> {calendar[0]['date']} </Text>
                <Text  style = {agendaStyle.txt}> {calendar[0]['time']} | {calendar[0]['service']} </Text>
            </View>
        )
    }
    return null
}
