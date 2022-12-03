import  React,{useContext} from "react"
import { Alert, StyleSheet, View } from "react-native"
import { Button } from "react-native-elements";
import {AppContext} from '../../../context'

const LogoutAlert = ({navigation}) => {
    const {clear}=useContext(AppContext);
    Alert.alert(
        "",
        "Do you really want to logout?",
        [
            {
                text: "Logout",
                onPress: () => {
                    clear();
                    navigation.navigate('Onboarding');
                },
                
                style: "logout",
            },
            {
                text: "Cancel",
                onPress: () => {
                    navigation.navigate('Profile');
                },
                style: "Cancel"
            }
        ],
        {
            cancelable: true,
            onDismiss: () => 
                Alert.alert(
                    "You canceled your logout operation."
                ),

        }
    );
}

export default LogoutAlert;