import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import Video from 'react-native-video';


class SplashScreen extends React.Component{

    constructor(props) {
        super(props);
      }
    render(){

        setTimeout(() => {
            this.props.navigation.replace('Launch');
        },5000);

        return (
            <Video style = {{flex:1, backgroundColor:'black'}}
            source = {require('../assests/splash.mp4')}
            resizeMode = 'contain' />
        );
    }
}

export default SplashScreen;
