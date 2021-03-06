import React from 'react'
import { Text, View, SafeAreaView} from 'react-native'
import headerStyle from '../styles/header/header'

export default Header =  (props) => {
  return (
      <SafeAreaView style={headerStyle.safeArea}>
        <View style={headerStyle.container}>
          <View>
            <Text style={headerStyle.h1}> {props.userFullName} </Text>
          </View>
          <View>
            <Text style={headerStyle.p}>{getDate()}</Text>
          </View>
        </View>
      </SafeAreaView>
  )
}

let getDate = () => {
  let dayOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  let month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  let today = new Date();
  let day = String(today.getDay());
  let dd = String(today.getDate());
  let mm = String(today.getMonth());
  today = dayOfWeek[day].charAt(0).toUpperCase() + dayOfWeek[day].slice(1) + '\n' + dd + ' ' + month[mm];
  return today;
}