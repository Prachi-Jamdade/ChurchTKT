import React,{useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import ImageBackUp from '../../assests/icons/back.png';
import gobalStyle from '../../styles/index';
import {AppContext} from '../../../context';
import {generatePaymentSPM,completePaymentSPM} from '../../api/explore';
import RazorpayCheckout from 'react-native-razorpay';
import RequestSent from './RequestSent';
import { RFValue } from 'react-native-responsive-fontsize';

const SPMOfferings = ({navigation})=>{

    const {user} = useContext(AppContext);
    const [amount,setAmount] = useState(0);


    const getOrder = async()=>{
        try {

        const _amount = parseInt(amount);
        const {firstName,phoneNumber,email} = user;
        const getOrderDetails = await generatePaymentSPM({amount:_amount,name:firstName,phoneNumber:phoneNumber,email:email});

        const {razorpayKey,orderId} = getOrderDetails;

        const options = {
            description: 'Tkt Church',
            image: "https://kingstemple.in/wp-content/uploads/2019/08/logotkt-darkk.png",
            currency: 'INR',
            key: razorpayKey,
            amount: amount,
            name: 'TKT Church',
            order_id: orderId,
            prefill: {
              email: email,
              contact: phoneNumber,
              name: firstName,
            },
            theme: {color: '#53a20e'},
          };

          RazorpayCheckout.open(options).then(async (data) => {
            // // handle success
            // const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=data;
            const _completePayment = await completePaymentSPM(data);
            setAmount(0);
            alert('Payment done successfully');
          }).catch((error) => {
            // handle failure
            console.log(error);
            alert('Something went wrong, try again');
          });
        } catch (e){
            alert('Something went wrong, try again');
        }
        };

        return (
            <KeyboardAvoidingView
            keyboardShouldPersistTaps='never'
            behavior= {Platform.OS=='ios'?"padding":'height'}
            >

            <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => navigation.navigate('Spm')}
                >

                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>SPM</Text>
                </TouchableOpacity>

            <SafeAreaView style={styles.card}>
                <SafeAreaView style={{flex: 1}}>

                <Text style={{fontWeight: 'bold', color: 'white', fontSize: RFValue(16)}}>Enter the amount</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Amount (in INR)"
                    placeHolderTextColor = "#989898"
                    keyboardType = "number-pad"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    value={amount}
                    onChangeText={(text)=>{setAmount(text);}}
                    />
                </SafeAreaView>

                <TouchableHighlight
                    style={gobalStyle.btn_abs}
                    onPress={() => {getOrder();}}
                   >
                    <Text style={[gobalStyle.submitText]}>PAY</Text>
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
        paddingHorizontal: 24,
        paddingTop: 18,
    },
    input: {
        height: 50,
        marginTop: 12,
        padding: 10,
        width: '100%',
        color: 'white',
        fontSize: 16,
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 10,
    },

});

export default SPMOfferings;
