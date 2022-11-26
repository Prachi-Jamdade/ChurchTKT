import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableHighlight,
    ImageBackground,
    Button,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomInput from '../custom/CustomInput';


class Registration extends React.Component {

    state = {
        phoneNumber: '',
        firstName: '',
        lastName: '',
    }

    handleFirstName = (text) => {
        this.setState({firstName: text});
    }

    handleLastName = (text) => {
        this.setState({lastName: text});
    }

    handleNumber = (text) => {
        this.setState({phoneNumber : text});
        if (text.length === 10){
            this.accepted = true;
        }
        else {
            this.accepted = false;
        }
    }

    sendOtp = (props) =>{
        props.navigation.navigate('VerifyOtp',{phoneNumber : this.state.phoneNumber});
    }

    render(){
        return(
            <View style= {styles.main}>
                <Text style= {styles.header}>We would love to have you!</Text>
                <Text style= {styles.dehigligtedText}>We need Some details to get you onboard!</Text>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "First Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "white"
                        autoCapitalize = "none"
                        onChangeText = {this.handleFirstName}/>
                </View>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Last Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "white"
                        autoCapitalize = "none"
                        onChangeText = {this.handleLastName}/>
                </View>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Mobile No"
                        keyboardType = 'number-pad'
                        placeholderTextColor = "white"
                        autoCapitalize = "none"
                        onChangeText = {this.handleNumber}/>
                </View>

                <View style= {styles.helper}>
                    <Text style = {styles.dehigligtedText}>Already have an account ?</Text>
                    <TouchableHighlight>
                        <Text 
                        style = {styles.timmer}
                        onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}
                        >Login</Text>
                        </TouchableHighlight>
                </View>
                <TouchableHighlight
                    style={[styles.submit,{backgroundColor : this.accepted ? '#FFBE18' : 'grey'}]}
                    disabled = {!this.accepted}
                    onPress={() => {this.sendOtp(this.props)}}
                    underlayColor='#fff'>
                    <Text style={[styles.text]}>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }

}

export default Registration;

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013',paddingTop:15},
    header : {color: 'white',marginTop: 16, marginHorizontal: 16, fontFamily : 'Montserrat', fontSize: 18, fontWeight: 'bold'},
    dehigligtedText: {color :'#989898', marginTop: 6, marginLeft: 16, fontSize: 16},
    timmer:{color: '#E23045', marginTop: 6, marginLeft:10, marginEnd: 16, fontSize: 16},
    redText:{color: '#E23045', marginTop: 6, marginLeft:10, marginEnd: 16, fontSize: 16, textDecorationLine:'underline'},
    submit : {
        position: 'absolute',
        bottom:0,
        left: 0,
        right:0,
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 16,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    textInputContainer: {
        alignSelf: 'center',
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: 60,
        color: 'white',
        letterSpacing: 0,
        borderColor: 'white',
    },
    helper: {flexDirection: 'row', alignSelf: 'flex-end'},
    text: {color: 'white', alignSelf: 'center', fontSize: 14},
    input: {
        margin: 15,
        height: 50,
        padding: 10,
        color: 'white',
        fontSize: 16,
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 10,
    },
});
