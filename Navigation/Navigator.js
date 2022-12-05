/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useContext} from 'react';
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
import Home from '../Screens/home'
import { AppContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountDetails from '../Screens/fragments/profile/AccountDetails';
import Help from '../Screens/fragments/profile/Help';
import LogoutAlert from '../Screens/fragments/profile/LogoutAlert';
import RequestForm from '../Screens/fragments/explore/RequestForm';
import Events from '../Screens/fragments/explore/Events';
import OffErings from '../Screens/fragments/explore/Offerings';
import Spm from '../Screens/fragments/explore/Spm';
import RequestSent from '../Screens/fragments/explore/RequestSent';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator({navigation}) {

const {setUser,setUserLogin}=useContext(AppContext);

  const getData = async () => {
    const value = await AsyncStorage.getItem('user')
    if(value===null) {
      setUserLogin(false);
      navigation.navigate('Login');
      return;
    }
    setUserLogin(true);
    setUser({...JSON.parse(value),token:''});
  };



  useEffect(()=>{
    getData();
  },[]);

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
          <Stack.Screen
            name='RequestForm'
            component={RequestForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Events'
            component={Events}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='OffErings'
            component={OffErings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Spm'
            component={Spm}
            options={{ headerShown: false }}
          />
    </Stack.Navigator>

  );
}

export default MainStackNavigator;