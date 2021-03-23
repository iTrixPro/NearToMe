import React from 'react';

import { View } from 'react-native';
import Login from "./Login";
import Register from "./Register";
import SlidingUpPanel from 'rn-sliding-up-panel';

const Signin = () => {
  return (
    <View>
      <Login></Login>
      <SlidingUpPanel>
        <Register></Register>
      </SlidingUpPanel>
    </View>
  );
}

export default Signin;