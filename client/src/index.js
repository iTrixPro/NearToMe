import React from 'react';
import Authentication from './screens/authentication/Authentication'
import Navbar from './navigation/navbar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions= {{headerShown : false}}>
      <Stack.Screen name = "Authentication" component = {Authentication} />
      <Stack.Screen name = "Main" component = {Navbar} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}