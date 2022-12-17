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
import {sendOtpToNumber} from '../api/authication'
import gobalStyle from '../styles/index'
import { RFValue } from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');
const height = width * 100 / 70;
const PHONE_REGEX = /^[0-9]{10}$/


// const Login = ({navigation}) => {
class Login extends React.Component{

//    const [accepted , setAccepted] = useState(false);

    state = {
        phoneNumber : '',
        accepted : 'false',
    }

    constructor(props){
        super(props);
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
        sendOtpToNumber(this.state.phoneNumber,true)
        .then((data)=>{
            // console.log(data);
            if (!data.isValid){
                return alert('User does not exit');
            }
            props.navigation.navigate('VerifyOtp',{phoneNumber : this.state.phoneNumber,isLogin:true});
        })
        .catch((e)=>{
            alert('Something went wrong, try again');
        });
    }

    render(){
        return (
            <SafeAreaView style= {gobalStyle.main}>
                <Text style = {gobalStyle.header}>Welcome Back!</Text>
                <Text style = {styles.dehigligtedText}>Enter your mobile no to Login</Text>
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
                    <Text style = {styles.dehigligtedText}>Don't have an account yet?</Text>
                    <Text style = {styles.signUp} onPress={()=>{
                        this.props.navigation.navigate('Registration');
                    }}>Sign Up</Text>
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

const styles = StyleSheet.create({
    dehigligtedText: {color :'#989898', marginTop: RFValue(6), marginLeft: RFValue(16), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium'},
    input: {
        margin: RFValue(15),
        height: RFValue(50),
        padding: RFValue(10),
        color: 'white',
        marginVertical: RFValue(16),
        fontSize: RFValue(16),
        paddingStart: RFValue(20),
        borderColor: '#989898',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Montserrat-Regular'
    },
    helper: {flexDirection: 'row', alignSelf: 'flex-end'},
    signUp:{color: '#E23045',marginTop: RFValue(6), marginLeft:RFValue(8), marginEnd: RFValue(20), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium'},
});

export default Login;
