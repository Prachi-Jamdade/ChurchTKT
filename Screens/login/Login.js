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
import {sendOtpToNumber} from '../api/authication'
import gobalStyle from '../styles/index'

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
            console.log(data);
            if (!data.isValid){
                return console.log('User not exits');
            }
            props.navigation.navigate('VerifyOtp',{phoneNumber : this.state.phoneNumber,isLogin:true});
        })
        .catch((e)=>{
            console.log('Some thing went wrong');
        });
    }

    render(){
        return (
            <View style= {gobalStyle.main}>
                <Text style = {gobalStyle.header}>Welcome Back!</Text>
                <Text style = {styles.dehigligtedText}>Enter your mobile no to Login</Text>
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
                    <Text style = {styles.dehigligtedText}>Don't have an account yet ?</Text>
                    <Text style = {styles.signUp} onPress={()=>{
                        this.props.navigation.navigate('Registration');
                    }}>Sign Up</Text>
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

const styles = StyleSheet.create({
    dehigligtedText: {color :'#989898', marginTop: 6, marginLeft: 16, fontSize: 16},
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
    helper: {flexDirection: 'row', alignSelf: 'flex-end'},
    signUp:{color: '#E23045',marginTop: 6, marginLeft:10, marginEnd: 16, fontSize: 16},
});

export default Login;
