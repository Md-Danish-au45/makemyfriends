
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Singin1 from '../screens/Singin1';
import PhoneNoScreen from '../screens/PhoneNoScreen';
import OtpScreen from '../screens/OtpScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import RulesScreen from '../screens/RulesScreen';
import NameScreen from '../screens/NameScreen';
import BirthdayScreen from '../screens/BirthdayScreen';
import GenderScreen from '../screens/GenderScreen';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Singin1" component={Singin1} />
      <Stack.Screen name="PhoneNoScreen" component={PhoneNoScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
      <Stack.Screen name="GenderScreen" component={GenderScreen} />







    </Stack.Navigator>
  );
};

export default Navigator;


// make chengers