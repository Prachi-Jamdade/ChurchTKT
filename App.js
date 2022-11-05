import React, {Component} from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {LocalizationProvider} from 'react-localization';
import MainStackNavigator from './Navigation/Navigator';



function App() {
  return (
    <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
  );
}


export default App;


// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;