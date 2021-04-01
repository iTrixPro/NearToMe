import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from "../../../component/header";
import payementStyle from '../../../styles/sub-screens/profile/payement';

export const ScreenPayement = (props) => {
    return (
        <ScrollView style={payementStyle.screen}>
            <Header userFullName = {props.userFullName}></Header>

            <View style={payementStyle.container}>
                {renderCard("04", "2024", props.userFullName)}
            </View>

            <TouchableOpacity style={payementStyle.button}>
                <Image
                    style={payementStyle.add}
                    source={require('../../../assets/images/main/profile/add.png')}
                />
                <Text style={payementStyle.buttonP}>AJOUTER UNE CARTE</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

let dots = () => {
    return(
        <View style={payementStyle.dots}>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.space}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.space}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.space}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
            <View style={payementStyle.dot}></View>
        </View>
    )
}

let renderCard = (mois, annee, name) => {
    return (
        <View style={payementStyle.card}>
            <Text style={payementStyle.h1}>NearToMe</Text>
            <View style={payementStyle.puce}></View>
            <View>{dots()}</View>
            <View style={payementStyle.footer}>
                <View><Text style={payementStyle.footerNomP}>{name}</Text></View>
                <View>
                    <Text style={payementStyle.footerDateIntroP}>Mois/Année</Text>
                    <Text style={payementStyle.footerDateP}>Valide jusqu'à {mois}/{annee}</Text>
                </View>
            </View>
        </View>
    )
}
