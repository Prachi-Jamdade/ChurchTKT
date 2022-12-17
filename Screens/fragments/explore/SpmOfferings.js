import React,{useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
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
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: razorpayKey,
            amount: amount,
            name: 'Acme Corp',
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
            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => navigation.navigate('Spm')}
                >

                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>SPM</Text>
                </TouchableOpacity>

            <View style={styles.card}>
                <View style={{flex: 1}}>

                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>Enter the amount</Text>
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
                </View>

                <TouchableHighlight
                    style={gobalStyle.btn_abs}
                    onPress={() => {getOrder();}}
                   >
                    <Text style={[gobalStyle.submitText]}>PAY</Text>
                </TouchableHighlight>


            </View>
            </View>
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
