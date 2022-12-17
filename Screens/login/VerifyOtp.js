import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    SafeAreaView
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { loginOtpVerification, sigUpOtpVerification } from '../api/authication'
import { AppContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import gobalStyle from '../styles/index';
import {sendOtpToNumber} from '../api/authication';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize';

class VerifyOtp extends React.Component {

    state = {
        otp: '',
        accepted: 'false',
        route: {},
        timer:60*5,
        timerRef:null,
    }
    static contextType = AppContext;

    constructor(props) {
        super(props);
        const timerRef=setInterval(() =>{
            if(this.state.timer==0) return;
            this.setState({ timer:this.state.timer-1 })
        },1000);
    }

    verify = () => {
        if (!this.state.accepted) { return false; }
        const { phoneNumber } = this.props.route.params;
        const { isLogin } = this.props.route.params;

        if (isLogin) {
            loginOtpVerification(phoneNumber, this.otp)
                .then((data) => {
                    if (!data.isValid) {
                        return console.log('In vaild Otp');
                    }
                    AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
                        this.context.setUser(data);
                        this.context.setUserLogin(true);
                        this.props.navigation.navigate('BottomTabs',{isLogin:true});
                    });
                })
                .catch((e) => {
                    alert('In vaild Otp');
                });
        } else {
            const { firstName, lastName } = this.props.route.params;
            sigUpOtpVerification(phoneNumber, firstName, lastName, this.otp)
                .then((data) => {
                    if (!data.isValid) {
                        return alert('In vaild Otp');
                    }
                    AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
                        this.context.setUser(data);
                        this.context.setUserLogin(true);
                        this.props.navigation.navigate('BottomTabs',{isLogin:true});
                    });
                })
                .catch((e) => {
                    alert('In vaild Otp');
                });

        }
        // alert(this.otp);
    }

    resendOtp = () => {

        if (!this.state.accepted) { return false; }
        const { phoneNumber } = this.props.route.params;
        const { isLogin } = this.props.route.params;


        if (!isLogin) {
            sendOtpToNumber(phoneNumber,false)
                .then((data)=>{
                    if (!data.isValid){
                        return alert('Looks like you have already an account,please login');
                    }
                    alert('Send The New Otp');
                    this.setState({ timer:60*5 })

                })
                .catch((e)=>{
                    alert('Something went wrong, try again');
                });
        } else {
            sendOtpToNumber(phoneNumber,true)
                .then((data)=>{
                    // console.log(data);
                    if (!data.isValid){
                        return alert('User does not exit');
                    }
                    this.setState({ timer:60*5 })
                    alert('Send The New Otp');
                })
                .catch((e)=>{
                    alert('Something went wrong, try again');
                });

        }
        // alert(this.otp);
    }

    handleOTP = (text) => {
        if (text.length === 4) {
            this.otp = text;
            this.setState({ accepted: true });
        }
        else {
            this.setState({ accepted: false });
        }
    }

    getMinutes=()=>{
        return `0${Math.floor(this.state.timer/60)}`;
    }

    getSeconds =()=>{
        let ans=this.state.timer-Math.floor(this.state.timer/60)*60;
        return ans<10?`0${ans}`:ans;
    }

    getTime =()=>{
        return `${this.getMinutes()}:${this.getSeconds()}`
    }

    render() {
        let phoneNumber = '+91' + (this.props.route.params.phoneNumber).toString();
        return (
            <SafeAreaView style={gobalStyle.main}>
                <Text style={gobalStyle.header}>Just a second!</Text>
                <Text style={styles.dehigligtedText}>We have sent an OTP to {phoneNumber}</Text>
                <OTPTextView
                    borderColor='#FFBE18'
                    handleTextChange={(e) => this.handleOTP(e)}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    color='white'
                    inputCellLength={1}
                />
                <SafeAreaView style={{ flexDirection: 'row' }}>
                    <SafeAreaView style={{ width: '80%', flexDirection: 'row' }}>
                        <Text style={styles.dehigligtedText}>Expries in : </Text>
                        <Text style={styles.timmer}>
                            {this.getTime()}
                        </Text>
                    </SafeAreaView>
                    <SafeAreaView style={{ width: '30%', alignSelf: 'flex-end' }}>
                    <TouchableHighlight
                    onPress={() => { this.resendOtp() }}
                    >
                        <Text style={styles.redText}>Resend</Text>
                    </TouchableHighlight>
                    </SafeAreaView>
                </SafeAreaView>
                <TouchableHighlight
                    style={[gobalStyle.btn_abs, { backgroundColor: this.state.accepted ? '#FFBE18' : 'grey', }]}
                    disabled={!this.state.accepted}
                    onPress={() => { this.verify() }}
                    underlayColor='#fff'>
                    <Text style={[gobalStyle.submitText]}>Verify</Text>
                </TouchableHighlight>
            </SafeAreaView>
        )
    }

}

export default VerifyOtp;
const styles = StyleSheet.create({
    dehigligtedText: { color: '#989898', marginTop: RFValue(6), marginLeft: RFValue(6), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium' },
    timmer: { color: '#E23045', marginTop: RFValue(6), marginLeft: RFValue(5), marginEnd: RFValue(5), fontSize: RFValue(16), fontFamily: 'Montserrat-Medium' },
    redText: { color: '#E23045', marginTop: RFValue(6), marginRight: RFValue(30), marginEnd: RFValue(6), fontSize: RFValue(16), textDecorationLine: 'underline',  fontFamily: 'Montserrat-Medium' },
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
        color: 'white',
        letterSpacing: 0,
        borderColor: 'white',
    },
    helper: { flexDirection: 'row', alignSelf: 'flex-end' },
    text: { color: 'white', alignSelf: 'center', fontSize: RFValue(14) },
});


