import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Image} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import ImageBackUp from '../../assests/icons/back.png';
import gobalStyle from '../../styles/index';
import {AppContext} from '../../../context';
import {generatePayment, completePayment} from '../../api/explore';
import RazorpayCheckout from 'react-native-razorpay';
import {RFValue} from 'react-native-responsive-fontsize';
import BtnAnimation from '../../fragments/Btn';
import LoginAlert from '../../custom/LoginAlert';
import analytics from '@react-native-firebase/analytics';

const Offerings = ({navigation}) => {
  const {user, setAlert, isUserLogin} = useContext(AppContext);
  const [loading, setLodding] = useState(false);
  const [amount, setAmount] = useState(0);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isUserLogin) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [isUserLogin]);

  const offeringsEvent = async () => {
    console.log('Offerings Event Triggered');
    await analytics().logEvent('give_offering', {
      event: 'give_offering',
    });
  };

  const getOrder = async () => {
    if (loading) return;
    try {
      const _amount = parseInt(amount) * 100;
      if (_amount == 0) {
        return setAlert('error', 'Enter the amount first');
      }
      const {firstName, phoneNumber, email} = user;
      setLodding(true);
      const getOrderDetails = await generatePayment({
        amount: _amount,
        name: firstName,
        phoneNumber: phoneNumber,
        email: email,
      });

      const {razorpayKey, orderId} = getOrderDetails;

      const options = {
        description: 'Tkt Church',
        image:
          'https://kingstemple.in/wp-content/uploads/2019/08/logotkt-darkk.png',
        currency: 'INR',
        key: razorpayKey,
        amount: _amount,
        name: 'TKT Church',
        order_id: orderId,
        prefill: {
          email: email,
          contact: phoneNumber,
          name: firstName,
        },
        theme: {color: '#FFFFFF'},
      };

      RazorpayCheckout.open(options)
        .then(async data => {
          // // handle success
          // const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=data;
          const _completePayment = await completePayment(data);
          setAmount(0);
          setAlert('success', 'Payment done successfully');
          offeringsEvent()
          // alert('Payment done successfully');
        })
        .catch(error => {
          // handle failure
          console.log(error, 12);
          setAlert('error', 'Something went wrong, try again');
          // alert('Something went wrong, try again');
        })
        .finally(() => {
          setLodding(false);
        });
    } catch (e) {
      console.log(e, 212);
      setAlert('error', 'Something went wrong, try again');
      setLodding(false);
      // alert('Something went wrong, try again');
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      {showAlert && (
        <LoginAlert
          navigation={navigation}
          isDisable={true}
          setShow={setShowAlert}
          prevScreen="Explore"
        />
      )}
      <SafeAreaView
        style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
        <TouchableOpacity
          style={gobalStyle.nav}
          // provide navigate path
          onPress={() => navigation.navigate('Explore')}>
          <Image source={ImageBackUp} style={gobalStyle.nav_image} />
          <Text style={gobalStyle.nav_header}>Give Offerings</Text>
        </TouchableOpacity>

        <SafeAreaView style={styles.card}>
          <SafeAreaView style={{flex: 1}}>
            <Text
              style={{
                fontFamily: 'Montserrat-Medium',
                color: 'white',
                fontSize: RFValue(16),
              }}>
              Enter the amount
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: 'gray',
                fontSize: RFValue(14),
                marginTop: RFValue(12),
                marginBottom: RFValue(14),
              }}>
              How much would you love to offer us, Enter the amount here.
            </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Amount (in INR)"
              placeHolderTextColor="#989898"
              keyboardType="number-pad"
              placeholderTextColor="white"
              autoCapitalize="none"
              value={amount}
              onChangeText={text => {
                setAmount(text);
              }}
            />
          </SafeAreaView>

          <TouchableHighlight
            style={gobalStyle.btn_abs}
            onPress={() => {
              getOrder();
            }}>
            {loading ? (
              <BtnAnimation></BtnAnimation>
            ) : (
              <Text style={[gobalStyle.submitText]}>GIVE</Text>
            )}
          </TouchableHighlight>
        </SafeAreaView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 10,
    // backgroundColor: '#0F0F0F',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(18),
  },
  input: {
    height: RFValue(50),
    marginTop: RFValue(12),
    padding: RFValue(10),
    width: '100%',
    color: 'white',
    fontSize: RFValue(16),
    borderColor: '#989898',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Offerings;
