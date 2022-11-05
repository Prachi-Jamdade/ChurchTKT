import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launch from '../Screens/starters/Launch';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
    <Stack.Navigator
      initialRouteName='Launch'>
        <Stack.Screen
        name='Launch'
        component={Launch}
        />
    </Stack.Navigator>
    );
}

export default MainStackNavigator;