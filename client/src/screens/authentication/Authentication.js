import React, { useState } from 'react'

import { View } from 'react-native'
import Login from "./Login"
import Register from "./Register"
import SlidingUpPanel from 'rn-sliding-up-panel'
export default Authentication = ({navigation}) => {
  const [pannel, setPannel] = useState('')
  return (
    <View>
      <Login navigator = {navigation}></Login>
      <SlidingUpPanel ref={(ref) => {setPannel(ref)}}>
        <Register navigator = {navigation} pannel = {pannel}></Register>
      </SlidingUpPanel>
    </View>
  );
}
