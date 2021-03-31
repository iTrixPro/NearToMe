import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from "./Header";
import particulier from '../styles/particulier/particulier';
import Confirmer from  "./Confirmer";

//UseState afin de créer un array de bouttons...


let renderTarifs = () => {
    const [formule, setFormule] = React.useState(0);
    let array = [
        ["Classic", "formule classique proposant la base de ce que nous pouvons vous proposez.", "20"],
        ["Special", "formule premium proposant le meilleur de ce que nous pouvons vous proposez.", "40"],
    ]

    let result = [];
    for (let index = 0; index < array.length; index++) {
        result.push(
            <TouchableOpacity key={index} style={(index == formule)?particulier.tarifSelected : particulier.tarif}
                onPress={() => setFormule(index)}
            >
                <Text style={(index == formule)?particulier.h1Selected : particulier.h1}>{array[index][0]}</Text>
                <Text style={(index == formule)?particulier.pSelected : particulier.p}>{array[index][1]}</Text>
                <Text style={(index == formule)?particulier.h1Selected : particulier.h1}>{array[index][2]}€</Text>
            </TouchableOpacity>
        )
    }

    return result;
}

let getDate = () => {
    let month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    let mm = String(new Date().getMonth() + 1);
    return month[mm].charAt(0).toUpperCase() + month[mm].slice(1);
  }

let renderCalendar = () => {
    const [daySelected, setDaySelected] = React.useState(new Date().getDate());
    
    let nbDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
    let result = [];
    for (let index = 0; index < 35; index++) {
        if (index < nbDays) {
            result.push(
                <TouchableOpacity key={index} style={(index+1 == daySelected)?particulier.daySelected :(index+1 < new Date().getDate())?particulier.dayPassed :particulier.day}
                    onPress={() => {
                        (index+1 < new Date().getDate())?setDaySelected(daySelected): setDaySelected(index+1)
                    }}
                >
                    <Text style={(index+1 == daySelected)?particulier.dayPSelected :particulier.dayP}>{index + 1}</Text>
                </TouchableOpacity>
            )
        }else{
            result.push(
                <View key={index} style={particulier.dayInvisible}>
                </View>
            )
        }
    }
    return result;
}

let renderHoraires = () => {
    const [horaires, sethoraires] = React.useState(0);

    let arrayHoraires = ['08:00 - 09:00', '09:30 - 10:30', '11:00 - 12:00', '12:30 - 13:30'];
    let result = [];
    for (let index = 0; index < arrayHoraires.length; index++) {
        const element = arrayHoraires[index];
        result.push(
            <TouchableOpacity key={index} style={(index == horaires)?particulier.horaireSelected: particulier.horaire}
                onPress={()=> sethoraires(index)}
            >
                <Text style={(index == horaires)?particulier.horairePSelected: particulier.horaireP}>{element}</Text>
            </TouchableOpacity>
        )
    }
    return result;
}

export default function App() {
    return (
        <ScrollView style={particulier.screen}>
            <View style={particulier.background}>
                <Header></Header>
                <View style={particulier.container}>
                    <View style={particulier.avatar}>
                        <Image
                            style={particulier.avatarImage}
                            source={require('../assets/images/favoris/avatar.png')}
                        />
                        <Text style={particulier.h1}>Axel MORRANT</Text>
                    </View>
                    <View style={particulier.tarifs}>
                        {renderTarifs()}
                    </View>
                    <View style={particulier.calendar}>
                        <View style={particulier.calendarMonth}><Text style={particulier.h1}>{getDate()}</Text></View>
                        <View style={particulier.days}>
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
