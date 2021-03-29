import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from "./Header";
import particulierStyle from '../styles/particulier/particulier';
import { primaryColor } from '../styles/colors';
import particulier from '../styles/particulier/particulier';

//UseState afin de créer un array de bouttons...

let selectTarif = (e) => {
    console.log(e);
}

let renderTarifs = (title, desc, price) => {
    let result = (
        <TouchableOpacity key={title} onPress={selectTarif(this)} style={particulierStyle.tarif}>
            <Text style={particulierStyle.h1}>{title}</Text>
            <Text style={particulierStyle.p}>{desc}</Text>
            <Text style={particulierStyle.h1}>{price}€</Text>
        </TouchableOpacity>
    )
    return result;
}

let getDate = () => {
    let month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    let mm = String(new Date().getMonth() + 1);
    return month[mm].charAt(0).toUpperCase() + month[mm].slice(1);
  }

let renderCalendar = () => {
    let nbDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
    let result = [];
    for (let index = 0; index < 35; index++) {
        if (index < nbDays) {
            result.push(
                <TouchableOpacity key={index} style={particulierStyle.day}>
                    <Text style={particulierStyle.dayP}>{index + 1}</Text>
                </TouchableOpacity>
            )
        }else{
            result.push(
                <View key={index} style={particulierStyle.dayInvisible}>
                </View>
            )
        }
    }
    return result;
}

let renderHoraires = () => {
    let arrayHoraires = ['08:00 - 09:00', '09:30 - 10:30', '11:00 - 12:00', '12:30 - 13:30'];
    let result = [];
    for (let index = 0; index < arrayHoraires.length; index++) {
        const element = arrayHoraires[index];
        result.push(
            <TouchableOpacity key={index} style={particulier.horaire}>
                <Text style={particulier.horaireP}>{element}</Text>
            </TouchableOpacity>
        )
    }
    return result;
}

export default function App() {
    return (
        <ScrollView style={particulierStyle.screen}>
            <View style={particulierStyle.background}>
                <Header></Header>
                <View style={particulierStyle.container}>
                    <View style={particulierStyle.tarifs}>
                        {renderTarifs("Classic", "formule classique proposant la base de ce que nous pouvons vous proposez.", "20")}
                        {renderTarifs("Special", "formule premium proposant le meilleur de ce que nous pouvons vous proposez.", "40")}
                    </View>
                    <View style={particulier.calendar}>
                        <View style={particulier.calendarMonth}><Text style={particulier.h1}>{getDate()}</Text></View>
                        <View style={particulierStyle.days}>
                            {renderCalendar()}
                        </View>
                    </View>
                    <View style={particulier.horaires}>
                        {renderHoraires()}
                    </View>
                    <TouchableOpacity style={particulier.submit}>
                        <Text style={particulier.submitP}>Je veux ce service !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        )
    }