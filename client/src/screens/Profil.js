import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from "./Header";
import profil from '../styles/profil/profil';

export default function App() {
    return (
        <View style={profil.screen}>
            <Header></Header>
            <View style={profil.container}>
                <TouchableOpacity style={profil.block}>
                    <Text style={profil.h1}>Aide</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profil.block}>
                    <Text style={profil.h1}>Favoris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profil.block}>
                    <Text style={profil.h1}>Moyens de paiement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profil.block}>
                    <Text style={profil.h1}>Paramètres</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profil.blockParticulier}>
                    <Text style={profil.h1Particulier}>Devenir Particulier !</Text>
                    <Text style={profil.pBold}>Vous aussi vous avez un service à proposer ?</Text>
                    <Text style={profil.p}>Devenez Particulier et faite connaissance avec nos millions d'utilisateurs.</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }