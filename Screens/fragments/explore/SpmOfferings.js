import React,{useState,useContext,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    SafeAreaView, Platform, KeyboardAvoidingView,
} from "react-native";
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
import BtnAnimation from '../Btn';
import LoginAlert from '../../custom/LoginAlert';



const SPMOfferings = ({navigation})=>{

    const {user, setAlert,isUserLogin} = useContext(AppContext);
    const [loading,setLodding]=useState(false);
    const [amount,setAmount] = useState(0);

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if(!isUserLogin) {
            setShowAlert(true);
        }else{
            setShowAlert(false);
        }
    }, [isUserLogin]);


    const getOrder = async()=>{
        if(loading) return;
        try {

        let _amount = parseInt(amount);

        if(_amount==0){
            return setAlert("error", "Enter the amount first")
            // return alert('Enter the amount');
        }
        _amount=_amount*100;
        const {firstName,phoneNumber,email} = user;
        setLodding(true);
        const getOrderDetails = await generatePaymentSPM({amount:_amount,name:firstName,phoneNumber:phoneNumber,email:email});

            const {razorpayKey,orderId} = getOrderDetails;

        const options = {
            description: 'Tkt Church',
            image: "https://kingstemple.in/wp-content/uploads/2019/08/logotkt-darkk.png",
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
          .then(async (data) => {
            const _completePayment = await completePaymentSPM(data);
            setAmount(0);
            setAlert("success", "Payment done successfully")
          }).catch((error) => {
            // handle failure
            console.log(error);
            setAlert("error", "Something went wrong, try again")
          }).finally(()=>{
            setLodding(false);
          })
        } catch (e){
            console.log(e);
            setAlert("error", "Something went wrong, try again")
            // alert('Something went wrong, try again');
            setLodding(false)
        }
    };

    return (
      <KeyboardAvoidingView
        keyboardShouldPersistTaps='never'
        behavior= {Platform.OS=='ios'?"padding":'height'}
        style={{flex:1}}
      >
        {
            showAlert && <LoginAlert navigation={navigation}  isDisable={true}  setShow={setShowAlert} prevScreen='Spm' />
        } 

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
                 {
                    loading
                    ?
                    <BtnAnimation></BtnAnimation>
                    :
                    <Text style={[gobalStyle.submitText]}>PAY</Text>
                }
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
