import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from "./Header";
import favoris from '../styles/favoris/favoris';

let renderFavoris = () => {
    let array = [['Jean', 'Coiffeur'], ['Maurice', 'Masseur'], ['Pierre', 'Serrurier'], ['Eude', 'Plombier'], ['Guy', 'Psychologue']];
    let result = [];

    for (let index = 0; index < array.length; index++) {
        result.push(
            <TouchableOpacity style={favoris.blockParticulier}>
                <Image
                    style={favoris.avatar}
                    source={require('../assets/images/favoris/avatar.png')}
                />
                <View style={favoris.blockParticulierText}>
                    <Text style={favoris.h1}>{array[index][0]}</Text>
                    <Text style={favoris.p}>- {array[index][1]} -</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return result;
}

export default function App() {
    return (
        <ScrollView style={favoris.screen}>
            <Header></Header>
            <View style={favoris.container}>
                <View style={favoris.block}>
                    <Text style={favoris.h1}>Favoris</Text>
                </View>
                {renderFavoris()}
            </View>
        </ScrollView>
        )
    }