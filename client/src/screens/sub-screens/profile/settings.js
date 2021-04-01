import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from "../../../component/header";
import settingsStyle from '../../../styles/sub-screens/profile/settings';

export const ScreenSettings = (props) => {
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");
    const [numTel, setNumTel] = React.useState("");
    const [adresse, setAdresse] = React.useState("");
    const [mdp, setMDP] = React.useState("");

    return (
      <View style = {settingsStyle.containAll}>
        <ScrollView style={settingsStyle.screen} showsVerticalScrollIndicator = {false}>
            <Header userFullName = {props.userFullName}></Header>
            <View style={settingsStyle.container}>
                <View style={settingsStyle.block}>
                    <Text style={settingsStyle.h1}>Paramètre</Text>
                </View>

                <View style={settingsStyle.blockParticulier}>
                    <Text style={settingsStyle.p}>Changer mon Nom</Text>
                    <TextInput
                        style={settingsStyle.input}
                        onChangeText={text => setNom(text)}
                    />
                    <View style={settingsStyle.containerButton}>
                        <TouchableOpacity style={settingsStyle.button}>
                            <Text style={settingsStyle.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={settingsStyle.blockParticulier}>
                    <Text style={settingsStyle.p}>Changer mon Prenom</Text>
                    <TextInput
                        style={settingsStyle.input}
                        onChangeText={text => setPrenom(text)}
                    />
                    <View style={settingsStyle.containerButton}>
                        <TouchableOpacity style={settingsStyle.button}>
                            <Text style={settingsStyle.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={settingsStyle.blockParticulier}>
                    <Text style={settingsStyle.p}>Changer mon Numero de Téléphone</Text>
                    <TextInput
                    
                        keyboardType = 'phone-pad'
                        style={settingsStyle.input}
                        onChangeText={text => setNumTel(text)}
                    />
                    <View style={settingsStyle.containerButton}>
                        <TouchableOpacity style={settingsStyle.button}>
                            <Text style={settingsStyle.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={settingsStyle.blockParticulier}>
                    <Text style={settingsStyle.p}>Changer mon Adresse</Text>
                    <TextInput
                        style={settingsStyle.input}
                        onChangeText={text => setAdresse(text)}
                    />
                    <View style={settingsStyle.containerButton}>
                        <TouchableOpacity style={settingsStyle.button}>
                            <Text style={settingsStyle.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={settingsStyle.blockParticulier}>
                    <Text style={settingsStyle.p}>Changer mon Mot de Passe</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={settingsStyle.input}
                        onChangeText={text => setMDP(text)}
                    />
                    <View style={settingsStyle.containerButton}>
                        <TouchableOpacity style={settingsStyle.button}>
                            <Text style={settingsStyle.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
      </View>
    )
}