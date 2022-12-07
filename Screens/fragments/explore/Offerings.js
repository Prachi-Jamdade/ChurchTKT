import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import ImageBackUp from '../../assests/icons/back.png';
import gobalStyle from '../../styles/index';


class Offerings extends React.Component{

    state = {

    }
    render(){
        return (
            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => this.props.navigation.navigate('Explore')}
                >

                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>Give Offerings</Text>
                </TouchableOpacity>

            <View style={styles.card}>
                <View style={{flex: 1}}>

                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>Enter the amount</Text>
                <Text style={{color: 'gray', fontSize: 12, marginTop: 12}}>How much would you love to offer us, Enter the amount here.</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Amount (in INR)"
                    placeHolderTextColor = "#989898"
                    keyboardType = "number-pad"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    />
                </View>



                <TouchableHighlight
                    style={gobalStyle.btn_abs}
                    onPress={() => {}}
                   >
                    <Text style={[gobalStyle.submitText]}>PAY</Text>
                </TouchableHighlight>

            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        flex: 10,
        // backgroundColor: '#0F0F0F',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 18,
    },
    input: {
        height: 50,
        marginTop: 12,
        padding: 10,
        width: '100%',
        color: 'white',
        fontSize: 16,
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 10,
    },

});

export default Offerings;
