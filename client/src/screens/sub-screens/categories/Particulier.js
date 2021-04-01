import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from "../../../component/header"
import particulierStyle from '../../../styles/sub-screens/category/particulier'
import { setCalendar } from '../../../utils/utils'

let date
let hours
const service = "coiffeur (Amid EON)"
export const ScreenParticulier = (props) => {
    return (
        <ScrollView style={particulierStyle.screen} showsVerticalScrollIndicator = {false}>
            <View style={particulierStyle.background}>
                <Header userFullName = {props.userFullName}></Header>
                <View style={particulierStyle.container}>
                    <View style={particulierStyle.avatar}>
                        <Image
                            style={particulierStyle.avatarImage}
                            source={require('../../../assets/images/main/category/user_icon.png')}
                        />
                        <Text style={particulierStyle.h1}>Amid EON</Text>
                    </View>
                    <View style={particulierStyle.tarifs}>
                        {renderTarifs()}
                    </View>
                    <View style={particulierStyle.calendar}>
                        <View style={particulierStyle.calendarMonth}><Text style={particulierStyle.h1}>{getDate()}</Text></View>
                        <View style={particulierStyle.days}>
                            {renderCalendar()}
                        </View>
                    </View>
                    <View style={particulierStyle.horaires}>
                        {renderHoraires()}
                    </View>
                    <TouchableOpacity style={particulierStyle.submit} onPress = {() => {
                        setCalendar({
                            "service" : service,
                            "date" : date,
                            "time" : hours 
                        })
                    }}>
                        <Text style={particulierStyle.submitP}>Je veux ce service !</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
        )
}

let renderTarifs = () => {

    const [formule, setFormule] = React.useState(0);
    let array = [
        ["Classic", "formule classique proposant la base de ce que nous pouvons vous proposez.", "20"],
        ["Special", "formule premium proposant le meilleur de ce que nous pouvons vous proposez.", "40"],
    ]
    let result = [];

    for (let index = 0; index < array.length; index++) {
        result.push(
            <TouchableOpacity key={index} style={(index == formule)?particulierStyle.tarifSelected : particulierStyle.tarif}
                onPress={() => setFormule(index)}
            >
                <Text style={(index == formule)?particulierStyle.h1Selected : particulierStyle.h1}>{array[index][0]}</Text>
                <Text style={(index == formule)?particulierStyle.pSelected : particulierStyle.p}>{array[index][1]}</Text>
                <Text style={(index == formule)?particulierStyle.h1Selected : particulierStyle.h1}>{array[index][2]}€</Text>
            </TouchableOpacity>
        )
    }

    return result;
}

let getDate = () => {
    let month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    let mm = String(new Date().getMonth());

    return month[mm].charAt(0).toUpperCase() + month[mm].slice(1);
}

let renderCalendar = () => {
    const [daySelected, setDaySelected] = React.useState(new Date().getDate());
    
    let nbDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
    let result = [];

    for (let index = 0; index < 35; index++) {
        if (index < nbDays) {
            result.push(
                <TouchableOpacity key={index} style={(index+1 == daySelected)?particulierStyle.daySelected :(index+1 < new Date().getDate())?particulierStyle.dayPassed :particulierStyle.day}
                    onPress={() => {
                        (index+1 < new Date().getDate())?setDaySelected(daySelected): setDaySelected(index+1)
                    }}
                >
                    <Text style={(index+1 == daySelected)?particulierStyle.dayPSelected :particulierStyle.dayP}>{index + 1}</Text>
                </TouchableOpacity>
            )
        }else{
            result.push(
                <View key={index} style={particulierStyle.dayInvisible}>
                </View>
            )
        }
    }

    date = daySelected + " " + getDate()
    return result;

}

let renderHoraires = () => {
    const [horaires, sethoraires] = React.useState(0);

    let arrayHoraires = ['08:00 - 09:00', '09:30 - 10:30', '11:00 - 12:00', '12:30 - 13:30'];
    let result = [];

    for (let index = 0; index < arrayHoraires.length; index++) {
        const element = arrayHoraires[index];
        result.push(
            <TouchableOpacity key={index} style={(index == horaires)?particulierStyle.horaireSelected: particulierStyle.horaire}
                onPress={()=> sethoraires(index)}
            >
                <Text style={(index == horaires)?particulierStyle.horairePSelected: particulierStyle.horaireP}>{element}</Text>
            </TouchableOpacity>
        )
    }

    hours = arrayHoraires[horaires].substring(0, arrayHoraires[horaires].indexOf(' '))
    return result;
}
