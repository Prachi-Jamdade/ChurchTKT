/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/login/Login';
import Onboarding from '../Screens/onboarding';
import VerifyOtp from '../Screens/login/VerifyOtp';
import BottomTabs from '../Screens/fragments/BottomTabs';
import Registration from '../Screens/login/Registration';
import SplashScreen from '../Screens/splashscreen';
import Community from '../Screens/community';
import Home from '../Screens/home';
import {AppContext} from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountDetails from '../Screens/profile/AccountDetails';
import Help from '../Screens/profile/Help';
import RequestForm from '../Screens/explore/RequestForm';
import Events from '../Screens/explore/Events';
import OffErings from '../Screens/explore/Offerings/index';
import SpmOffErings from '../Screens/explore/SPM/SpmOfferings';
import Spm from '../Screens/explore/SPM';
import JoinSPM from '../Screens/explore/SPM/JoinSPM';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator({navigation, route}) {
  const {setUser, setUserLogin, isUserLogin} = useContext(AppContext);

  const getData = async () => {
    const value = await AsyncStorage.getItem('user');
    if (value == null || value == 'null') {
      setUserLogin(false);
      navigation.navigate('Login');
      return;
    }
    setUserLogin(true);
    setUser({...JSON.parse(value)});
  };

  useEffect(() => {
    getData();
  }, [isUserLogin]);

  return (
    <Stack.Navigator initialRouteName="SplashScreenSplashScreenSplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Community"
        component={Community}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RequestForm"
        component={RequestForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OffErings"
        component={OffErings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpmOffErings"
        component={SpmOffErings}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Spm" component={Spm} options={{headerShown: false}} />
      <Stack.Screen
        name="JoinSPM"
        component={JoinSPM}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
