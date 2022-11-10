import React, {useContext} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Layout,
    Text,
    Modal,
    Button
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../onboarding/Onboarding'
import Login from '../login/Login';


let logged = false;
const Stack = createNativeStackNavigator();

const Launch = ({navigation}) => {
    return (
        <>
        {
            !logged ? navigation.navigate('Onboarding') : <Text>You did it Man !!</Text>
        }
        </>
    )
}

export default Launch;