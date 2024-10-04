
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
import SexualOrientationScreen from '../screens/SexualOrientationScreen';
import InterestedScreen from '../screens/InterestedScreen';
import LookingForScreen from '../screens/LookingForScreen';
import DistancePreferenceScreen from '../screens/DistancePreferenceScreen';
import StudyingPage from '../screens/StudyingPage';
import LifestyleHabitsPage from '../screens/LifestyleHabitsPage';
import AdditionalQuestionsPage from '../screens/AdditionalQuestionsPage';
import RecentPicsPage from '../screens/RecentPicsPage';


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
      <Stack.Screen name="SexualOrientationScreen" component={SexualOrientationScreen} />
      <Stack.Screen name="InterestedScreen" component={InterestedScreen} />
      <Stack.Screen name="LookingForScreen" component={LookingForScreen} />
      <Stack.Screen name="DistancePreferenceScreen" component={DistancePreferenceScreen} />
      <Stack.Screen name="StudyingPage" component={StudyingPage} />
      <Stack.Screen name="LifestyleHabitsPage" component={LifestyleHabitsPage} />
      <Stack.Screen name="AdditionalQuestionsPage" component={AdditionalQuestionsPage} />
      <Stack.Screen name="RecentPicsPage" component={RecentPicsPage} />















    </Stack.Navigator>
  );
};

export default Navigator;


// make chengers