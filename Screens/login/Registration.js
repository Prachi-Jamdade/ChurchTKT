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
import { AppContext } from '../../context';


class Registration extends React.Component {

    static contextType = AppContext;

    state = {
        phoneNumber: '',
        firstName: '',
        lastName: '',
    }

    handleFirstName = (text) => {
        this.setState({firstName: text.replace(/[^0-9]/g, '')});
        if (text && this.state.phoneNumber.length===10 && this.state.lastName.replace(/[^0-9]/g, '')){
            this.accepted = true;
        }
        else {
            this.accepted = false;
        }
    }

    handleLastName = (text) => {
        this.setState({lastName: text.replace(/[^0-9]/g, '')});
        if (text && this.state.phoneNumber.length===10 && this.state.firstName.replace(/[^0-9]/g, '')){
            this.accepted = true;
        }
        else {
            this.accepted = false;
        }
    }

    handleNumber = (text) => {
        this.setState({phoneNumber : text});
        if (text.length === 10 && this.state.firstName && this.state.lastName){
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
                return this.context.setAlert("error", "Looks like you already have an account, please login");
                // return alert('Looks like you have already an account,please login');
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
            return this.context.setAlert("error", "Something went wrong");
            // alert('Something went wrong');
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
                        maxLength = {5}
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
    dehigligtedText: {color :'#989898', marginTop: RFValue(6), marginLeft: RFValue(16), fontSize: RFValue(14), fontFamily: 'Montserrat-Medium'},
    timmer:{color: '#E23045', marginTop: RFValue(6), marginLeft:RFValue(10), marginEnd: RFValue(16), fontSize: RFValue(14), fontFamily: 'Montserrat-Medium'},
    redText:{color: '#E23045', marginTop: RFValue(6), marginLeft:RFValue(10), marginEnd: RFValue(16), fontSize: RFValue(14), textDecorationLine:'underline'},
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    textInputContainer: {
        alignSelf: 'center',
        width: '100%',
        marginVertical: RFValue(10),
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
        fontSize: RFValue(14),
        borderColor: '#292929',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Montserrat-Regular'
    },
});
