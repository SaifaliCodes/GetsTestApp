import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//Screens
import Login from './screens/login';
import Navigator from './Navigation';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  
  return (
    <Navigator/>
  );
}


export default App;
