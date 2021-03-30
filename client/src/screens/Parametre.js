import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from "./Header";
import parametre from '../styles/parametre/parametre';

export default function App() {
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");
    const [numTel, setNumTel] = React.useState("");
    const [adresse, setAdresse] = React.useState("");
    const [mdp, setMDP] = React.useState("");

    return (
        <ScrollView style={parametre.screen}>
            <Header></Header>
            <View style={parametre.container}>
                <View style={parametre.block}>
                    <Text style={parametre.h1}>Paramètre</Text>
                </View>

                <View style={parametre.blockParticulier}>
                    <Text style={parametre.p}>Changer mon Nom</Text>
                    <TextInput
                        style={parametre.input}
                        onChangeText={text => setNom(text)}
                    />
                    <View style={parametre.containerButton}>
                        <TouchableOpacity style={parametre.button}>
                            <Text style={parametre.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={parametre.blockParticulier}>
                    <Text style={parametre.p}>Changer mon Prenom</Text>
                    <TextInput
                        style={parametre.input}
                        onChangeText={text => setPrenom(text)}
                    />
                    <View style={parametre.containerButton}>
                        <TouchableOpacity style={parametre.button}>
                            <Text style={parametre.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={parametre.blockParticulier}>
                    <Text style={parametre.p}>Changer mon Numero de Téléphone</Text>
                    <TextInput
                    
                        keyboardType = 'phone-pad'
                        style={parametre.input}
                        onChangeText={text => setNumTel(text)}
                    />
                    <View style={parametre.containerButton}>
                        <TouchableOpacity style={parametre.button}>
                            <Text style={parametre.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={parametre.blockParticulier}>
                    <Text style={parametre.p}>Changer mon Adresse</Text>
                    <TextInput
                        style={parametre.input}
                        onChangeText={text => setAdresse(text)}
                    />
                    <View style={parametre.containerButton}>
                        <TouchableOpacity style={parametre.button}>
                            <Text style={parametre.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={parametre.blockParticulier}>
                    <Text style={parametre.p}>Changer mon Mot de Passe</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={parametre.input}
                        onChangeText={text => setMDP(text)}
                    />
                    <View style={parametre.containerButton}>
                        <TouchableOpacity style={parametre.button}>
                            <Text style={parametre.buttonText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 350}}></View>
            </View>
        </ScrollView>
        )
    }