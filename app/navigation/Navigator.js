
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Home from '../screens/Homes';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default Navigator;


// make chengers