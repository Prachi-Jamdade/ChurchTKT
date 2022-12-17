import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { loginOtpVerification, sigUpOtpVerification } from '../api/authication'
import { AppContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import gobalStyle from '../styles/index';
import {sendOtpToNumber} from '../api/authication';

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
        // const timerRef=setInterval(() =>{
        //     if(this.state.timer==0) return;
        //     this.setState({ timer:this.state.timer-1 })
        // },1000);
        // this.setState({timerRef:timerRef});
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
                    alert('Some thing went wrong');
                });
        } else {
            sendOtpToNumber(phoneNumber,true)
                .then((data)=>{
                    // console.log(data);
                    if (!data.isValid){
                        return alert('User not exits');
                    }
                    this.setState({ timer:60*5 })
                    alert('Send The New Otp');
                })
                .catch((e)=>{
                    alert('Some thing went wrong');
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
            <View style={gobalStyle.main}>
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
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '80%', flexDirection: 'row' }}>
                        <Text style={styles.dehigligtedText}>Expries in : </Text>
                        <Text style={styles.timmer}>
                            {this.getTime()}
                        </Text>
                    </View>
                    <View style={{ width: '30%', alignSelf: 'flex-end' }}>
                    <TouchableHighlight
                    onPress={() => { this.resendOtp() }}
                    >
                        <Text style={styles.redText}>Resend</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight
                    style={[gobalStyle.btn_abs, { backgroundColor: this.state.accepted ? '#FFBE18' : 'grey', }]}
                    disabled={!this.state.accepted}
                    onPress={() => { this.verify() }}
                    underlayColor='#fff'>
                    <Text style={[gobalStyle.submitText]}>Verify</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

export default VerifyOtp;
const styles = StyleSheet.create({
    dehigligtedText: { color: '#989898', marginTop: 6, marginLeft: 16, fontSize: 16, fontFamily: 'Montserrat-Medium' },
    timmer: { color: '#E23045', marginTop: 6, marginLeft: 5, marginEnd: 5, fontSize: 16, fontFamily: 'Montserrat-Medium' },
    redText: { color: '#E23045', marginTop: 6, marginRight: 30, marginEnd: 16, fontSize: 16, textDecorationLine: 'underline',  fontFamily: 'Montserrat-Medium' },
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
    helper: { flexDirection: 'row', alignSelf: 'flex-end' },
    text: { color: 'white', alignSelf: 'center', fontSize: 14 },
});


