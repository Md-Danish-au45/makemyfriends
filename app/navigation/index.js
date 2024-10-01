// src/navigation/index.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
// import AppNavigator from '.';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default Navigation;