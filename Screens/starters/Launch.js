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
import { AppContext } from '../../context';


let logged = false;
const Stack = createNativeStackNavigator();

const Launch = ({navigation}) => {
    const {isUserLogin}=useContext(AppContext);

    return (
        <>
        {
            !isUserLogin ? navigation.navigate('Onboarding') : navigation.navigate('BottomTabs')
        }
        </>
    )
}

export default Launch;