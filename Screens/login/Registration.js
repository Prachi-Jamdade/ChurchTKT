import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {sendOtpToNumber} from '../api/authication';
import gobalStyle from '../styles/index';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppContext} from '../../context';
import BtnAnimation from '../fragments/Btn';

const Registration = ({navigation}) => {
  const [accepted, setAccepted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const {setAlert} = useContext(AppContext);

  const handleFirstName = text => {
    setFirstName(text);
    if (text && phoneNumber.length === 10 && lastName.replace(/[^0-9]/g, '')) {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  const handleLastName = text => {
    setLastName(text);
    if (text && phoneNumber.length === 10 && firstName.replace(/[^0-9]/g, '')) {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  const handleNumber = text => {
    setPhoneNumber(text);
    if (text.length === 10 && firstName && lastName) {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  const sendOtp = () => {
    if (loading) return;

    setLoading(true);
    sendOtpToNumber(phoneNumber, false)
      .then(data => {
        if (!data.isValid) {
          return setAlert(
            'error',
            'Looks like you already have an account, please login',
          );
          // return alert('Looks like you have already an account,please login');
        }
        navigation.navigate('VerifyOtp', {
          phoneNumber: phoneNumber,
          firstName: firstName,
          lastName: lastName,
          isLogin: false,
        });
      })
      .catch(e => {
        return setAlert('error', 'Something went wrong');
        // alert('Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={gobalStyle.main}>
        <Text style={gobalStyle.header}>We would love to have you!</Text>
        <Text style={styles.dehigligtedText}>
          We need Some details to get you onboard!
        </Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="First Name"
            keyboardType="name-phone-pad"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            onChangeText={handleFirstName}
          />
        </SafeAreaView>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Last Name"
            keyboardType="name-phone-pad"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            onChangeText={handleLastName}
          />
        </SafeAreaView>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Mobile No"
            keyboardType="number-pad"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            maxLength={10}
            onChangeText={handleNumber}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.helper}>
          <Text style={styles.dehigligtedText}>Already have an account ?</Text>
          <TouchableHighlight>
            <Text
              style={styles.timmer}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </TouchableHighlight>
        </SafeAreaView>
        <TouchableHighlight
          style={[
            gobalStyle.btn_abs,
            {backgroundColor: accepted ? '#FFBE18' : 'grey'},
          ]}
          disabled={!accepted}
          onPress={() => {
            sendOtp();
          }}
          underlayColor="#fff">
          {loading ? (
            <BtnAnimation></BtnAnimation>
          ) : (
            <Text style={[gobalStyle.submitText]}>Continue</Text>
          )}
        </TouchableHighlight>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  dehigligtedText: {
    color: '#989898',
    marginTop: RFValue(6),
    marginLeft: RFValue(16),
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Medium',
  },
  timmer: {
    color: '#E23045',
    marginTop: RFValue(6),
    marginLeft: RFValue(10),
    marginEnd: RFValue(16),
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Medium',
  },
  redText: {
    color: '#E23045',
    marginTop: RFValue(6),
    marginLeft: RFValue(10),
    marginEnd: RFValue(16),
    fontSize: RFValue(14),
    textDecorationLine: 'underline',
  },
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
    color: '#989898',
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
    fontFamily: 'Montserrat-Regular',
  },
});
