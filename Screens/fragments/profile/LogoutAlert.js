import * as React from "react"
import { Alert, StyleSheet, View } from "react-native"
import { Button } from "react-native-elements";

const showLogoutAlert = () => {
    Alert.alert(
        "",
        "Do you really want to logout?",
        [
            {
                text: "Logout",
                onPress: () => Alert.alert("", "Logout Pressed."),
                style: "logout",
            },
            {
                text: "Cancel",
                onPress: () => Alert.alert("", "You canceled your logout operation."),
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

export default showLogoutAlert;