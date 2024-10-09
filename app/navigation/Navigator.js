
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin1 from '../screens/auth/Signin1';
import PhoneNoScreen from '../screens/auth/PhoneNoScreen';
import OtpScreen from '../screens/auth/OtpScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="phone" component={PhoneNoScreen} />
      <Stack.Screen name="otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;


// make chengers