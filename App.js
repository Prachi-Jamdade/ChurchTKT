import React, {Component, useEffect} from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {LocalizationProvider} from 'react-localization';
import MainStackNavigator from './Navigation/Navigator';
import Context from './context';
import { setCustomText } from 'react-native-global-props';
import { requestUserPermission , notificationListener  } from './utils/NotificationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

function App() {
  useEffect(()=>{
    if(Platform.OS=='android'){

      requestUserPermission()
      notificationListener()
    }
  },[])
  return (
    <NavigationContainer>
      <Context>
        <MainStackNavigator />
      </Context>
      <Toast />
    </NavigationContainer>
  );
}


export default App;