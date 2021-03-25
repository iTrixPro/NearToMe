import React from 'react';

import { View } from 'react-native';
import Login from "./Login";
import Register from "./Register";
import SlidingUpPanel from 'rn-sliding-up-panel';

export default Authentication = () => {
  return (
    <View>
      <Login></Login>
      <SlidingUpPanel>
        <Register></Register>
      </SlidingUpPanel>
    </View>
  );
}
