import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launch from '../Screens/starters/Launch';
import Login from '../Screens/login/Login';
import Onboarding from '../Screens/onboarding/Onboarding';
import VerifyOtp from '../Screens/login/VerifyOtp';
import BottomTabs from '../Screens/fragments/BottomTabs';
import Registration from '../Screens/login/Registration';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName='Launch'>
          <Stack.Screen
          name='Launch'
          component={Launch}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name='Registration'
          component={Registration}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name='VerifyOtp'
          component={VerifyOtp}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name='BottomTabs'
          component={BottomTabs}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    
    );
}

export default MainStackNavigator;