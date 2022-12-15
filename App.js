import React, {Component} from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {LocalizationProvider} from 'react-localization';
import MainStackNavigator from './Navigation/Navigator';
import Context from './context';
import { setCustomText } from 'react-native-global-props';


function App() {
  return (
    <NavigationContainer>
      <Context>
        <MainStackNavigator />
      </Context>
    </NavigationContainer>
  );
}


export default App;