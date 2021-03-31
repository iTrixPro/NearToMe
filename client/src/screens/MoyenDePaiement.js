import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Header from "./Header";
import moyenDePaiement from '../styles/moyenDePaiement/moyenDePaiement';

let dots = () => {
    return(
        <View style={moyenDePaiement.dots}>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.space}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.space}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.space}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
            <View style={moyenDePaiement.dot}></View>
        </View>
    )
}

let renderCard = (mois, annee) => {
    return (
        <View style={moyenDePaiement.card}>
            <Text style={moyenDePaiement.h1}>NearToMe</Text>
            <View style={moyenDePaiement.puce}></View>
            <View>{dots()}</View>
            <View style={moyenDePaiement.footer}>
                <View><Text style={moyenDePaiement.footerNomP}>Jean SMITH</Text></View>
                <View>
                    <Text style={moyenDePaiement.footerDateIntroP}>Mois/Année</Text>
                    <Text style={moyenDePaiement.footerDateP}>Valide jusqu'à {mois}/{annee}</Text>
                </View>
            </View>
        </View>
    )
}

export default function App() {

    return (
        <ScrollView style={moyenDePaiement.screen}>
            <Header></Header>
            <View style={moyenDePaiement.container}>
                {renderCard("01", "2024")}
            </View>
            <TouchableOpacity style={moyenDePaiement.button}>
                <Image
                    style={moyenDePaiement.add}
                    source={require('../assets/images/moyenDePaiement/add.png')}
                />
                <Text style={moyenDePaiement.buttonP}>AJOUTER UNE CARTE</Text>
            </TouchableOpacity>
        </ScrollView>
        )
    }