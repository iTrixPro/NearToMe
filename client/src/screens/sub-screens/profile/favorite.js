import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from "../../../component/header";
import favoriteStyle from '../../../styles/sub-screens/profile/favorite';

export const ScreenFavorite = (props) => {
    return (
        <ScrollView style={favoriteStyle.screen}>
            <Header userFullName = {props.userFullName}></Header>
            <View style={favoriteStyle.container}>
                <View style={favoriteStyle.block}>
                    <Text style={favoriteStyle.h1}>Favoris</Text>
                </View>
                {renderFavoris()}
            </View>
        </ScrollView>
        )
}

let renderFavoris = () => {
    let array = [/*['Jean', 'Coiffeur'], ['Maurice', 'Masseur'], ['Pierre', 'Serrurier'], ['Eude', 'Plombier'], ['Guy', 'Psychologue']*/];
    let result = [];

    if (array.length === 0) {
        result = (
            <View style={favoriteStyle.blockParticulier}>
                <Text style={favoriteStyle.p}> Vous n'avez aucun particulier en favoris.</Text>
            </View>
        )
    }
    
    for (let index = 0; index < array.length; index++) {
        result.push(
            <TouchableOpacity 
                style={favoriteStyle.blockParticulier}
                key = {index}
            >
                <Image
                    style={favoriteStyle.avatar}
                    source={require('../../../assets/images/main/profile/avatar.png')}
                />
                <View style={favoriteStyle.blockParticulierText}>
                    <Text style={favoriteStyle.h1}>{array[index][0]}</Text>
                    <Text style={favoriteStyle.p}>- {array[index][1]} -</Text>
                </View>
        </TouchableOpacity>
        )
    }

    return result;
}