import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Password from '../screens/password';
import Otp from '../screens/otp';
import UpcomingTrips from '../screens/upcomingTrips';
import OngoingTrips from '../screens/ongoingTrips';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="password" component={Password} options={{headerShown: false}}/>
        <Stack.Screen name="otp" component={Otp} options={{headerShown: false}}/>
        <Stack.Screen name="upcomingTrips" component={UpcomingTrips} options={{headerShown: false}}/>
        <Stack.Screen name="ongoingTrips" component={OngoingTrips} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;