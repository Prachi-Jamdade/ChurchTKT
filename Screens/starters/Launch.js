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



// const { width, height } = Dimensions.get('window');
// const frameWidth = width;
// const columnWidth = frameWidth / 3;

class Launch extends React.Component {
    // static navigationOptions = {};
    // constructor(props) {
    // super(props);

    // this.state = {
    //     firstLaunch: null,
    //     condUpdate: null
    // };
    // }
///....///
    render() {
    return(
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

export default Launch;