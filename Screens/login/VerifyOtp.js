import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {loginOtpVerification, sigUpOtpVerification} from '../api/authication';
import {AppContext} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import gobalStyle from '../styles/index';
import {sendOtpToNumber} from '../api/authication';
import {RFValue} from 'react-native-responsive-fontsize';
import BtnAnimation from '../fragments/Btn';

const VerifyOtp = ({navigation, route}) => {
  const [accepted, setAccepted] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60 * 5);
  const [timerRef, setTimerRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const {setAlert, setUser, setUserLogin} = useContext(AppContext);

  useEffect(() => {
    const timerRef = setInterval(() => {
      if (timer == 0) return;
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(timerRef);
    };
  }, []);

  const verify = () => {
    if (loading) return;
    if (!accepted) {
      return false;
    }

    const {phoneNumber} = route.params;
    const {isLogin} = route.params;
    setLoading(true);

    if (isLogin) {
      loginOtpVerification(phoneNumber, otp)
        .then(data => {
          if (!data.isValid) {
            return console.log('In vaild Otp');
          }
          AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
            setUser(data);
            setUserLogin(true);
            navigation.navigate('BottomTabs', {isLogin: true});
          });
        })
        .catch(e => {
          setAlert('error', 'OTP is not valid.');
          // alert('In vaild Otp');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const {firstName, lastName} = route.params;
      sigUpOtpVerification(phoneNumber, firstName, lastName, otp)
        .then(data => {
          if (!data.isValid) {
            return setAlert('error', 'OTP is not valid.');
          }
          AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
            setUser(data);
            setUserLogin(true);
            navigation.navigate('BottomTabs', {isLogin: true});
          });
        })
        .catch(e => {
          setAlert('error', 'OTP is not valid.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // alert(this.otp);
  };

  const resendOtp = () => {
    if (loading) return;
    if (!accepted) {
      return false;
    }

    const {phoneNumber} = route.params;
    const {isLogin} = route.params;
    setLoading(true);

    if (!isLogin) {
      sendOtpToNumber(phoneNumber, false)
        .then(data => {
          if (!data.isValid) {
            return setAlert(
              'error',
              'Looks like you already have an account, please login',
            );
            // return alert('Looks like you have already an account,please login');
          }
          setAlert('success', 'New OTP is sent');
          // alert('Send The New Otp');
          setTimer(60 * 5);
        })
        .catch(e => {
          setAlert('error', 'Something went wrong, try again');
          // alert('Something went wrong, try again');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      sendOtpToNumber(phoneNumber, true)
        .then(data => {
          // console.log(data);
          if (!data.isValid) {
            return setAlert('error', 'User does not exit');
            // return alert('User does not exit');
          }
          setTimer(60 * 5);
          setAlert('success', 'New OTP is sent');
          // alert('Send The New Otp');
        })
        .catch(e => {
          setAlert('error', 'Something went wrong, try again');
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // alert(this.otp);
  };

  const handleOTP = text => {
    if (text.length === 4) {
      setOtp(text);
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  const getMinutes = () => {
    return `0${Math.floor(timer / 60)}`;
  };

  const getSeconds = () => {
    let ans = timer - Math.floor(timer / 60) * 60;
    return ans < 10 ? `0${ans}` : ans;
  };

  const getTime = () => {
    return `${getMinutes()}:${getSeconds()}`;
  };

  let phoneNumber = '+91' + route.params.phoneNumber.toString();
  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={gobalStyle.main}>
        <Text style={gobalStyle.header}>Just a second!</Text>
        <Text style={styles.dehigligtedText}>
          We have sent an OTP to {phoneNumber}
        </Text>
        <OTPTextView
          borderColor="#FFBE18"
          handleTextChange={e => handleOTP(e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
          color="white"
          inputCellLength={1}
        />
        <SafeAreaView style={{flexDirection: 'row'}}>
          <SafeAreaView style={{width: '80%', flexDirection: 'row'}}>
            <Text style={styles.dehigligtedText}>Expries in : </Text>
            <Text style={styles.timmer}>{getTime()}</Text>
          </SafeAreaView>
          <SafeAreaView style={{width: '30%', alignSelf: 'flex-end'}}>
            <TouchableHighlight
              onPress={() => {
                resendOtp();
              }}>
              <Text style={styles.redText}>Resend</Text>
            </TouchableHighlight>
          </SafeAreaView>
        </SafeAreaView>
        <TouchableHighlight
          style={[
            gobalStyle.btn_abs,
            {backgroundColor: accepted ? '#FFBE18' : 'grey'},
          ]}
          disabled={!accepted}
          onPress={() => {
            verify();
          }}
          underlayColor="#fff">
          {loading ? (
            <BtnAnimation></BtnAnimation>
          ) : (
            <Text style={[gobalStyle.submitText]}>Verify</Text>
          )}
        </TouchableHighlight>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtp;
const styles = StyleSheet.create({
  dehigligtedText: {
    color: '#989898',
    marginTop: RFValue(6),
    marginLeft: RFValue(6),
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Medium',
  },
  timmer: {
    color: '#E23045',
    marginTop: RFValue(6),
    marginLeft: RFValue(5),
    marginEnd: RFValue(5),
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Medium',
  },
  redText: {
    color: '#E23045',
    marginTop: RFValue(6),
    marginRight: RFValue(30),
    marginEnd: RFValue(6),
    fontSize: RFValue(16),
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-Medium',
  },
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
  helper: {flexDirection: 'row', alignSelf: 'flex-end'},
  text: {color: 'white', alignSelf: 'center', fontSize: RFValue(14)},
});
