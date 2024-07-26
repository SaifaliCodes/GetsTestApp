import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Password from '../screens/password';
import Otp from '../screens/otp';
import StartShift from '../screens/startShift';
import UpcomingTrip from '../screens/upcomingTrip';
import OngoingTrip from '../screens/ongoingTrip';
import RequestedTrip from '../screens/requestedTrip';
import MyProfile from '../screens/myProfile';


const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="password" component={Password} options={{headerShown: false}}/>
        <Stack.Screen name="otp" component={Otp} options={{headerShown: false}}/>
        <Stack.Screen name="startShift" component={StartShift} options={{headerShown: false}}/>
        <Stack.Screen name="upcomingTrip" component={UpcomingTrip} options={{headerShown: false}}/>
        <Stack.Screen name="ongoingTrip" component={OngoingTrip} options={{headerShown: false}}/>
        <Stack.Screen name="requestedTrip" component={RequestedTrip} options={{headerShown: false}}/>
        <Stack.Screen name="myProfile" component={MyProfile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;