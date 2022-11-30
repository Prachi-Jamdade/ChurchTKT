import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from '../Screens/starters/Launch';
import Login from '../Screens/login/Login';
import Onboarding from '../Screens/onboarding/Onboarding';
import VerifyOtp from '../Screens/login/VerifyOtp';
import BottomTabs from '../Screens/fragments/BottomTabs';
import Registration from '../Screens/login/Registration';
import SplashScreen from '../Screens/splashscreen/SplashScreen';
import Community from '../Screens/Community';
import Home from '../Screens/home';
import AccountDetails from '../Screens/fragments/profile/AccountDetails';
import Help from '../Screens/fragments/profile/Help';
import LogoutAlert from '../Screens/fragments/profile/LogoutAlert';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='SplashScreenSplashScreenSplashScreen'>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
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
        name='Community'
        component={Community}
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
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='AccountDetails'
        component={AccountDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Help'
        component={Help}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LogoutAlert'
        component={LogoutAlert}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
}

export default MainStackNavigator;