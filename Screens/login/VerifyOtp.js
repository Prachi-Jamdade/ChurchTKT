import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {loginOtpVerification} from '../api/authication'


class VerifyOtp extends React.Component{

    state = {
        otp: '',
        accepted: 'false',
        route:{},
    }

    constructor(props){
        super(props);
    }

    verify = () => {
        if(!this.state.accepted) {return false;}
        const {phoneNumber}=this.props.route.params;
        console.log(phoneNumber,this.otp);
        loginOtpVerification(phoneNumber,this.otp)
        .then((data)=>{
            console.log(data);
            if (!data.isValid){
                return console.log('In vaild Otp');
            }
            this.props.navigation.navigate('BottomTabs',data);
        })
        .catch((e)=>{
            console.log(e);
            console.log('In vaild Otp');
        });
        // alert(this.otp);
    }

    handleOTP = (text) => {
        if (text.length === 4){
            this.otp = text;
            this.setState({accepted: true});
        }
        else {
            this.setState({accepted: false});
        }
    }

    render(){
        let phoneNumber = '+91' + (this.props.route.params.phoneNumber).toString();
        return (
            <View style= {styles.main}>
                <Text style= { styles.header}>Just a second!</Text>
                <Text style= {styles.dehigligtedText}>We hae sent an OTP to {phoneNumber}</Text>
                <OTPTextView
                    borderColor = '#FFBE18'
                    handleTextChange={(e) => this.handleOTP(e) }
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    color = 'white'
                    inputCellLength={1}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style = { {width: '80%',flexDirection: 'row'}}>
                        <Text style= {styles.dehigligtedText}>Expries in : </Text>
                        <Text style= {styles.timmer}>00:31</Text>
                    </View>
                    <View style={{width: '30%',alignSelf: 'flex-end'}}>
                        <Text style= {styles.redText}>Resend</Text>
                    </View>
                </View>
                <TouchableHighlight
                    style={[styles.submit,{backgroundColor : this.state.accepted ? '#FFBE18' : 'grey',}]}
                    disabled = {!this.state.accepted}
                    onPress={() => {this.verify()}}
                    underlayColor='#fff'>
                    <Text style={[styles.text]}>Verify</Text>
              </TouchableHighlight>
            </View>
        )
    }

}

export default VerifyOtp;
const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
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
});


