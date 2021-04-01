import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import upgradeStyle from '../../../styles/sub-screens/profile/upgrade';

const path = "../../../assets/images/authentication/register/";

export const ScreenUpgrade = () => {

    const [selectedCateg, setSelectedCateg] = useState();

    return (
        <View style={upgradeStyle.form}>
            <View style={upgradeStyle.content}>
                <View style={upgradeStyle.title}>
                    <Text style={upgradeStyle.titleTxt}>Devnir un particulier</Text>
                </View>

                <Image source={require(path + "registerIcon.png")} style={upgradeStyle.icon}></Image>

                <Text style={upgradeStyle.txt}>Nom du service</Text>
                <TextInput style={upgradeStyle.input}></TextInput>

                
                <Text style={upgradeStyle.txt}>Catégorie</Text>
                <View style={upgradeStyle.pickerContainer}>
                    <Picker
                        selectedValue={selectedCateg}
                        onValueChange={(itemValue, itemIndex) => setSelectedCateg(itemValue)}
                        style={upgradeStyle.picker}
                    >
                        <Picker.Item value="beauty" label="beauté" />
                        <Picker.Item value="assistanc" label="assistance" />
                        <Picker.Item value="food_service" label="restauration" />
                        <Picker.Item value="domestic" label="restauration" />
                    </Picker>
                </View>

                <Text style={upgradeStyle.txt}>Sous-catégorie</Text>
                <TextInput style={upgradeStyle.input}></TextInput>

                <View style={upgradeStyle.confirm}>
                    <TouchableOpacity style={upgradeStyle.confirmBtn}>
                        <Text style={upgradeStyle.confirmTxt}>Valider</Text>
                        <Image source={require(path + "proceedLight.png")} style={upgradeStyle.confirmIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}