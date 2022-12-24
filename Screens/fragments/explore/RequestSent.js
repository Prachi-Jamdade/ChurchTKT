import React, { useState,useRef,useEffect } from 'react';
import { View,Image,TouchableOpacity,Text,StyleSheet,Dimensions, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
const RequestSent = ({navigation,setShow}) => {
    const lottieRef = useRef(null);


    useEffect(() => {
        if (lottieRef.current) {
          setTimeout(() => {
                lottieRef.current?.play();
          }, 100);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lottieRef]);

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.containerItem}>
                <View style={{
                    width: 200,
                    height: 200 ,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    }}>
                <LottieView
                    ref={lottieRef}
                    loop={false}
                    autoPlay={false}
                    source={require('../../assests/done_tkt-church.json')}
                    />
                </View>

                <Text style={styles.header}>Request Sent</Text>

                <Text style={styles.text}>Thank you so much for sending your request</Text>

                <TouchableOpacity style={styles.chatSupportBtn}
                // provide naviate path
                    onPress={() => setShow(false)}
                    underlayColor='#fff'
                    >
                    <Text style={styles.loginText}>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </SafeAreaView>
    )
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    chatSupportBtn: {
        marginTop: 8,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        width:width*0.8,
    },
    loginText: {
        color:'white',
        textAlign: 'center',
        fontWeight:'medium',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom:0,
        
    },
    containerItem:{
        backgroundColor:'#0F0F0F',
        flexDirection: 'column',
        alignItems: 'center',
        width,
    },
    header:{
        fontSize:23,
        fontWeight:'bold',
        color:'white',
        marginTop: -20,
        marginBottom: 5,
        fontFamily: 'Montserrat-Medium'
    },
    text:{
        color:'white',
        width:width*.8,
        textAlign:'center',
        lineHeight:20,
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular'
    }
})

export default RequestSent;