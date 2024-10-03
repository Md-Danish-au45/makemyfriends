
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Singin1 from '../screens/Singin1';
import PhoneNoScreen from '../screens/PhoneNoScreen';
import OtpScreen from '../screens/OtpScreen';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Singin1" component={Singin1} />
      <Stack.Screen name="PhoneNoScreen" component={PhoneNoScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />

    </Stack.Navigator>
  );
};

export default Navigator;


// make chengers