// App.js
import { AppRegistry } from 'react-native';

import React from 'react';
import Navigation from './app/navigation';
import { name as appName } from './app.json';

export default function App() {
  return <Navigation />;
}
AppRegistry.registerComponent(appName, () => App);
