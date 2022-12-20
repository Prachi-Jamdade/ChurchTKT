import React,{useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import ImageBackUp from '../../assests/icons/back.png';
import gobalStyle from '../../styles/index';
import {AppContext} from '../../../context';
import {generatePayment,completePayment} from '../../api/explore';
import RazorpayCheckout from 'react-native-razorpay';
import RequestSent from './RequestSent';
import { RFValue } from 'react-native-responsive-fontsize';

const Offerings = ({navigation})=>{

    const {user} = useContext(AppContext);
    const [amount,setAmount] = useState(0);


    const getOrder = async()=>{
        try {

        const _amount = parseInt(amount)*100;
        const {firstName,phoneNumber,email} = user;
        const getOrderDetails = await generatePayment({amount:_amount,name:firstName,phoneNumber:phoneNumber,email:email});

        const {razorpayKey,orderId} = getOrderDetails;

        const options = {
            description: 'Tkt Church',
            image: "https://kingstemple.in/wp-content/uploads/2019/08/logotkt-darkk.png",
            currency: 'INR',
            key: razorpayKey,
            amount: _amount,
            name:"TKT Church",
            order_id: orderId,
            prefill: {
              email: email,
              contact: phoneNumber,
              name: firstName,
            },
            theme: {color: '#FFFFFF'},
          };

          RazorpayCheckout.open(options).then(async (data) => {
            // // handle success
            // const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=data;
            const _completePayment = await completePayment(data);
            setAmount(0);
            alert('Payment done successfully');
          }).catch((error) => {
            // handle failure
            // console.log(error);
            alert('Something went wrong, try again');
          });
        } catch (e){
            alert('Something went wrong, try again');
        }
        };

        return (
            <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => navigation.navigate('Explore')}
                >

                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>Give Offerings</Text>
                </TouchableOpacity>

            <SafeAreaView style={styles.card}>
                <SafeAreaView style={{flex: 1}}>

                <Text style={{fontFamily: 'Montserrat-Medium', color: 'white', fontSize: RFValue(16)}}>Enter the amount</Text>
                <Text style={{ fontFamily: 'Montserrat-Regular', color: 'gray', fontSize: RFValue(14), marginTop: RFValue(12), marginBottom: RFValue(14)}}>How much would you love to offer us, Enter the amount here.</Text>
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
                    <Text style={[gobalStyle.submitText]}>GIVE</Text>
                </TouchableHighlight>



            </SafeAreaView>
            </SafeAreaView>
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
        fontFamily: 'Montserrat-Regular'
    },

});

export default Offerings;
