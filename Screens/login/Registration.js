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
    SafeAreaView
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomInput from '../custom/CustomInput';
import {sendOtpToNumber} from '../api/authication';
import gobalStyle from '../styles/index';
import { RFValue } from 'react-native-responsive-fontsize';


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
        sendOtpToNumber(this.state.phoneNumber,false)
        .then((data)=>{
            if (!data.isValid){
                return alert('Looks like you have already an account,please login');
            }
            props.navigation.navigate('VerifyOtp',
            {
                phoneNumber : this.state.phoneNumber,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                isLogin:false,
            });
        })
        .catch((e)=>{
            alert('Something went wrong');
        });
    }

    render(){
        return(
            <SafeAreaView style= {gobalStyle.main}>
                <Text style= {gobalStyle.header}>We would love to have you!</Text>
                <Text style= {styles.dehigligtedText}>We need Some details to get you onboard!</Text>
                <SafeAreaView>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "First Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "#989898"
                        autoCapitalize = "none"
                        onChangeText = {this.handleFirstName}/>
                </SafeAreaView>
                <SafeAreaView>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Last Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "#989898"
                        autoCapitalize = "none"
                        onChangeText = {this.handleLastName}/>
                </SafeAreaView>
                <SafeAreaView>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Mobile No"
                        keyboardType = 'number-pad'
                        placeholderTextColor = "#989898"
                        autoCapitalize = "none"
                        onChangeText = {this.handleNumber}/>
                </SafeAreaView>

                <SafeAreaView style= {styles.helper}>
                    <Text style = {styles.dehigligtedText}>Already have an account ?</Text>
                    <TouchableHighlight>
                        <Text
                        style = {styles.timmer}
                        onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}
                        >Login</Text>
                        </TouchableHighlight>
                </SafeAreaView>
                <TouchableHighlight
                    style={[gobalStyle.btn_abs,{backgroundColor : this.accepted ? '#FFBE18' : 'grey'}]}
                    disabled = {!this.accepted}
                    onPress={() => {this.sendOtp(this.props)}}
                    underlayColor='#fff'>
                    <Text style={[gobalStyle.submitText]}>Continue</Text>
              </TouchableHighlight>
            </SafeAreaView>
        );
    }

}

export default Registration;

const styles = StyleSheet.create({
    dehigligtedText: {color :'#989898', marginTop: RFValue(6), marginLeft: RFValue(16), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium'},
    timmer:{color: '#E23045', marginTop: RFValue(6), marginLeft:RFValue(10), marginEnd: RFValue(16), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium'},
    redText:{color: '#E23045', marginTop: RFValue(6), marginLeft:RFValue(10), marginEnd: RFValue(16), fontSize: RFValue(16), textDecorationLine:'underline'},
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    textInputContainer: {
        alignSelf: 'center',
        width: '100%',
        marginVertical: RFValue(16),
        paddingHorizontal: RFValue(60),
        color :'#989898',
        letterSpacing: 0,
        borderColor: 'white',
    },
    helper: {flexDirection: 'row', alignSelf: 'flex-end'},
    input: {
        margin: RFValue(16),
        height: RFValue(50),
        paddingStart: RFValue(20),
        color: 'white',
        fontSize: RFValue(16),
        borderColor: '#292929',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Montserrat-Regular'
    },
});
