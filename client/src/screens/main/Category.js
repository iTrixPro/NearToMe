import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import categoryStyle from '../../styles/main/category'

import { createStackNavigator } from '@react-navigation/stack'
import { ScreenBeauty} from '../sub-screens/categories/Beauty'
import { ScreenHairdresser } from '../sub-screens/categories/Hairdresser'
import { ScreenParticulier } from '../sub-screens/categories/Particulier'

const path = "../../assets/images/main/category/"
const Stack = createStackNavigator()
export const CategoryScreen = (props) => {
    return (
      <Stack.Navigator screenOptions = {{headerShown : false}}>
        <Stack.Screen name="category" component={Screen}/>
        <Stack.Screen name="beauty" component={ScreenBeauty}/>
        <Stack.Screen name="hairdresser" children = {() => <ScreenHairdresser navigation={props.navigation} userFullName = {props.userFullName}/>} />
        <Stack.Screen name="particulier" children = {() => <ScreenParticulier navigation={props.navigation} userFullName = {props.userFullName}/>} />
      </Stack.Navigator>
    );
}

const Screen = (props) => {
  return (
  <View style={categoryStyle.container}>
            <TouchableOpacity style={categoryStyle.button} onPress={() => {
              props.navigation.navigate('beauty')
            }}> 
              <ImageBackground source={require(path + "beauty.png")} style={categoryStyle.img} blurRadius={2} imageStyle={{ borderRadius: 15 }}></ImageBackground>
              <Text style={categoryStyle.txt}> Beauté </Text>
              
            </TouchableOpacity>

            <TouchableOpacity style={Object.assign({}, categoryStyle.button, categoryStyle.secondButton)}>
              <ImageBackground source={require(path + "assistance.png")} style={categoryStyle.img} blurRadius={3} imageStyle={{ borderRadius: 15 }}></ImageBackground>
              <Text style={categoryStyle.txt} > Assistance </Text>
            </TouchableOpacity>

            <View style={categoryStyle.row}>
                <TouchableOpacity style={categoryStyle.smallButton}>
                  <ImageBackground source={require(path + "food.png")} style={categoryStyle.smallImg} blurRadius={3} imageStyle={{ borderRadius: 15 }}></ImageBackground>
                  <Text style={categoryStyle.smallTxt}> Restauration </Text>
                </TouchableOpacity>

                <TouchableOpacity style={categoryStyle.smallButton}>
                  <ImageBackground source={require(path + "domestique.png")} style={categoryStyle.smallImg} blurRadius={4} imageStyle={{ borderRadius: 15 }}></ImageBackground>
                  <Text style={categoryStyle.smallTxt}> Domestique </Text>
                </TouchableOpacity>
            </View>
            
   </View>
   )
}
