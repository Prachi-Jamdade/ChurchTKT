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


let logged = false;
const Stack = createNativeStackNavigator();

// const { width, height } = Dimensions.get('window');
// const frameWidth = width;
// const columnWidth = frameWidth / 3;

class Launch extends React.Component {
    render() {

        if (!logged){
            return(
                <Stack.Navigator>
                    <Stack.Screen
                        name='Onboarding'
                        component={Onboarding}
                        options={{ headerShown: false }}
                        />
                </Stack.Navigator>
            )
        }
        else {
            return (
                <View
                  style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 20,
                  }}>
                    <Text>You did it Man !!</Text>
                </View>
            );
        }
    
    }
}

export default Launch;