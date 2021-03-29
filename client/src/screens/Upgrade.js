import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import upgradeStyle from '../styles/upgrade/upgrade';

const path = "../assets/images/authentication/register/";

const Upgrade = () => {

    const [selectedCateg, setSelectedCateg] = useState();
    const [selectedSubcateg, setSelectedSubcateg] = useState();

    return (
        <View style={upgradeStyle.form}>
            <View style={upgradeStyle.content}>
                <TouchableOpacity style={upgradeStyle.title}>
                    <Text style={upgradeStyle.titleTxt}>Devnir un particulier</Text>
                    <Image source={require(path + "arrow.png")} style={upgradeStyle.titleIcon}></Image>
                </TouchableOpacity>
                <Image source={require(path + "registerIcon.png")} style={upgradeStyle.icon}></Image>
                <Text style={upgradeStyle.txt}>Nom du service</Text>
                <TextInput style={upgradeStyle.input}></TextInput>
                <Text style={upgradeStyle.txt}>Catégorie</Text>
                <Picker
                    selectedValue={selectedCateg}
                    onValueChange={(itemValue, itemIndex) => setSelectedCateg(itemValue)}
                    style={upgradeStyle.picker}>
                    <Picker.Item label="categ-1" value="categ-1" />
                    <Picker.Item label="categ-2" value="categ-2" />
                    <Picker.Item label="categ-3" value="categ-3" />
                </Picker>
                <Text style={upgradeStyle.txt}>Sous-catégorie</Text>
                <Picker
                    selectedValue={selectedSubcateg}
                    onValueChange={(itemValue, itemIndex) => setSelectedSubcateg(itemValue)}
                    style={upgradeStyle.picker}>
                    <Picker.Item label="sous-categ-1" value="sous-categ-1" />
                    <Picker.Item label="sous-categ-2" value="sous-categ-2" />
                    <Picker.Item label="sous-categ-3" value="sous-categ-3" />
                </Picker>
                <View style={upgradeStyle.confirm}>
                    <TouchableOpacity style={upgradeStyle.confirmBtn}>
                        <Text style={upgradeStyle.confirmTxt}>Valider</Text>
                        <Image source={require(path + "proceedLight.png")} style={upgradeStyle.confirmIcon}></Image>
                    </TouchableOpacity>
                    <Text style={upgradeStyle.pwd}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
}

export default Upgrade;