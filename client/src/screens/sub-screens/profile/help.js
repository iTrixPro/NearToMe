import React from 'react';
import { Image, Text, View } from 'react-native'
import Header from "../../../component/header"
import helpStyle from '../../../styles/sub-screens/profile/help'

const path = "../../../assets/images/main/profile/"
export const ScreenHelp = (props) => {
  return (
      <View style={helpStyle.screen}>
        <Header userFullName = {props.userFullName}></Header>
        <View style={helpStyle.container}>
          <View style={helpStyle.containerHelp}>
            <View style={helpStyle.containerHelpHeader}>
              <Image source={require(path + "info.png")} style={helpStyle.icon}></Image>
              <Text style={helpStyle.h1}>Aide</Text>
            </View>
            <Text style={helpStyle.p}>Pas d'aide disponible pour le moment.</Text>
            
            <View style={helpStyle.dots}>
              <View style={helpStyle.dotSelected}></View>
              <View style={helpStyle.dot}></View>
              <View style={helpStyle.dot}></View>
            </View>
          </View>
        </View>  
      </View>
  );
}