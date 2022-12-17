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
import {sendOtpToNumber} from '../api/authication';
import gobalStyle from '../styles/index';


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
            <View style= {gobalStyle.main}>
                <Text style= {gobalStyle.header}>We would love to have you!</Text>
                <Text style= {styles.dehigligtedText}>We need Some details to get you onboard!</Text>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "First Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "#989898"
                        autoCapitalize = "none"
                        onChangeText = {this.handleFirstName}/>
                </View>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Last Name"
                        keyboardType = 'name-phone-pad'
                        placeholderTextColor = "#989898"
                        autoCapitalize = "none"
                        onChangeText = {this.handleLastName}/>
                </View>
                <View>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Mobile No"
                        keyboardType = 'number-pad'
                        placeholderTextColor = "#989898"
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
                    style={[gobalStyle.btn_abs,{backgroundColor : this.accepted ? '#FFBE18' : 'grey'}]}
                    disabled = {!this.accepted}
                    onPress={() => {this.sendOtp(this.props)}}
                    underlayColor='#fff'>
                    <Text style={[gobalStyle.submitText]}>Continue</Text>
              </TouchableHighlight>
            </View>
        );
    }

}

export default Registration;

const styles = StyleSheet.create({
    dehigligtedText: {color :'#989898', marginTop: 6, marginLeft: 16, fontSize: 16, fontFamily: 'Montserrat-Medium'},
    timmer:{color: '#E23045', marginTop: 6, marginLeft:10, marginEnd: 16, fontSize: 16, fontFamily: 'Montserrat-Medium'},
    redText:{color: '#E23045', marginTop: 6, marginLeft:10, marginEnd: 16, fontSize: 16, textDecorationLine:'underline'},
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
        color :'#989898',
        letterSpacing: 0,
        borderColor: 'white',
    },
    helper: {flexDirection: 'row', alignSelf: 'flex-end'},
    input: {
        margin: 16,
        height: 50,
        paddingStart: 20,
        color: 'white',
        fontSize: 16,
        borderColor: '#292929',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Montserrat-Regular'
    },
});
