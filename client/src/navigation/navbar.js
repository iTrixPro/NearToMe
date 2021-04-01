import React from 'react'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, CategoryScreen, AgendaScreen, ProfileScreen } from '../screens/index'
import { Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primaryColor, black} from '../styles/colors'

const Tab = createBottomTabNavigator();
export default Navbar = ({route, navigation}) => {
  let name = route.params.name
  return (
      <Tab.Navigator
        screenOptions= {
          ({ route }) => ({
            tabBarLabel: ({focused, color, size}) => {
              return <Text style={{fontSize: 10, fontWeight: 'bold', opacity : focused ? 100 : 0, height: focused ? size : 0}}> {focused ? route.name.toUpperCase() : false} </Text>
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Accueil' :
                  iconName = 'home';
                  break;
                case 'Categories' :
                  iconName = 'layers';
                  break;
                case 'Agenda' :
                  iconName = 'calendar';
                  break;
                case 'Profil' :
                  iconName = 'person';
                  break;
              }
              return <Ionicons name={iconName} size = {size} color={color}/>
            },
          })}

          tabBarOptions={{
            activeTintColor: primaryColor,
            inactiveTintColor: black
          }}

      >
        <Tab.Screen name="Accueil" children={() => <HomeScreen userFullName = {name}/>} />
        <Tab.Screen name="Categories" children={() => <CategoryScreen navigation = {navigation} userFullName = {name}/>}/>
        <Tab.Screen name="Agenda" children={() => <AgendaScreen  userFullName = {name}/>}/>
        <Tab.Screen name="Profil" children={() => <ProfileScreen navigation = {navigation} userFullName = {name}/>}/>
      </Tab.Navigator>
  )
}