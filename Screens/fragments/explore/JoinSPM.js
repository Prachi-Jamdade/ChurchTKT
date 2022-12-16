import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native-animatable";
import { StyleSheet } from "react-native";
import gobalStyle from '../../styles/index';
import {AppContext} from '../../../context';
import { useState, useContext, useEffect } from "react";

const JoinSPM = () => {

    const [data, setData] = useState( {
        name: '',
        fatherName: '',
    });

    const {user}=useContext(AppContext);

    useEffect(()=>{
        setData({name:user.firstName+" "+user.lastName,phoneNo:user.phoneNumber})
    },[user])

    const handleName = (text) => {
        setData({...data,name: text});
    };

    const handleFatherName = (text) => {
        setData({...data,fatherName: text});
    };

    const [amount,setAmount] = useState(0);

    return (
        <View>
            <Text style={boldText}>
                We need some details
            </Text>

            <Text style={lightText}>
                Please provide us some of your information to be a part of SPM
            </Text>

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Your Name"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                value={data.name}
                onChangeText={handleName}
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Father's Name"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                value={data.name}
                onChangeText={handleFatherName}
            />

            <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, margin:10, color: 'white'}}>Gender</Text>
            <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 18 }}>Enter the amount you want to commit: </Text>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Amount (in INR)"
                placeHolderTextColor="#989898"
                keyboardType="number-pad"
                placeholderTextColor="white"
                autoCapitalize="none"
                value={amount}
                onChangeText={(text)=>{setAmount(text);}}
            />

            <TouchableHighlight
                style={gobalStyle.btn_abs}
                // onPress={() => { getOrder(); }}
            >
                <Text style={[gobalStyle.submitText]}>JOIN</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        marginStart: 20,
        marginEnd: 20,
        height: 40,
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    boldText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        margin: 10,
        color: 'white',
    },
    lightText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        margin: 10,
        marginBottom: 10,
        color: '#989898'
    },
    normalText: {
        
    }
})

export {styles};

export default JoinSPM;