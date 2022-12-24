import React from "react";
import { View, Image, Dimensions, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import gobalStyle from '../../styles/index';
import { AppContext } from '../../../context';
import { useState, useContext, useEffect } from "react";
import ImageBackUp from '../../assests/icons/back.png';
import { sendSPMFrom } from '../../api/requestForms'
import RadioButtonRN from 'radio-buttons-react-native';
import { RFValue } from "react-native-responsive-fontsize";
import {checkObj} from '../../utils/obj'


const JoinSPM = ({ navigation }) => {
    const { user } = useContext(AppContext);

    const [data, setData] = useState({
        userName: '',
        fatherName: '',
        userId: user.userId,
        gender: '',
        amount: 0,
    });


    const genderData = [
        {
            label: 'Male'
        },
        {
            label: 'Female'
        }
    ];

    const change = (name, value) => {
        setData({ ...data, [name]: value });
    };
    const submit = () => {
        const isOK=checkObj(data);
        if(!isOK){
            return alert('All fields are mandatory');
        }
        sendSPMFrom({ ...data }).then(() => {
            alert("Join the spm")
            setData({
                userName: '',
                fatherName: '',
                userId: user.userId,
                gender: "",
                amounts: 0
            })
            navigation.navigate("Spm",{isJoin:true})
        }).catch((e) => {
            alert("Something went wrong")
        })
    };


    return (
        <SafeAreaView style={gobalStyle.main}>
            <TouchableOpacity
                style={gobalStyle.nav}
                // provide navigate path
                onPress={() => navigation.navigate('Explore')}
            >
                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>Join SPM</Text>
            </TouchableOpacity>

            <ScrollView
             style={[styles.box]}
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
             >

                <SafeAreaView>

                <Text style={styles.boldText}>
                    We need some details
                </Text>

                <Text style={styles.lightText}>
                    Please provide us some of your information to be a part of SPM
                </Text>
               

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Your Name"
                        placeholderTextColor="#808080"
                        autoCapitalize="none"
                        name="userName"
                        value={data.userName}
                        onChangeText={(e) => change("userName", e)}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Father's Name"
                        placeholderTextColor="#808080"
                        autoCapitalize="none"
                        name="fatherName"
                        value={data.fatherName}
                        onChangeText={(e) => change("fatherName", e)}
                    />

                    {/* // <TextInput style={styles.input}
                    //     underlineColorAndroid="transparent"
                    //     placeholder="Gender"
                    //     placeholderTextColor="#808080"
                    //     autoCapitalize="none"
                    //     name="gender"
                    //     value={data.gender}
                    //     onChangeText={(e) => change("gender", e)}
                    // /> */}

                <Text style={[styles.normalText]}>
                    Gender
                </Text>


                    <RadioButtonRN
                    data={genderData}
                    selectedBtn={(e) => change("gender",e.label)}
                    style={{marginStart: RFValue(2)}}
                    activeColor={'#CF820E'}
                    inactiveColor={'#181818'}
                    boxStyle={{backgroundColor: '#1E1E1E', borderColor: '#1E1E1E'}}
                    textStyle={{fontFamily: 'Montserrat-Medium', fontSize: RFValue(16), color: 'white'}}
                    />

                    {/* <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, margin:10, color: 'white'}}>Gender</Text> */}
                    <Text style={[styles.lightText, { marginTop: RFValue(10) }]}>Enter the amount you want to commit: </Text>

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Amount (in INR)"
                        placeHolderTextColor="#989898"
                        keyboardType="number-pad"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        name="amount"
                        onChangeText={(e) => change("amount", parseInt(e))}
                    />
                </SafeAreaView>

                <TouchableHighlight
                    style={[gobalStyle.btn_abs,{position:'relative',marginTop:20}]}
                    onPress={() => { submit(); }}
                    >
                    <Text style={[gobalStyle.submitText]}>JOIN</Text>
                </TouchableHighlight>
            </ScrollView>
        </SafeAreaView>
    )
}

const { width } = Dimensions.get('window');
const boxWidth = width * 0.9;
const styles = StyleSheet.create({
    input: {
        height: RFValue(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: RFValue(5),
        marginHorizontal: RFValue(10),
        marginStart: RFValue(20),
        marginEnd: RFValue(20),
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal: RFValue(10),
        color: 'white',
        borderRadius: RFValue(10),
        fontSize: RFValue(15),
        fontFamily: 'Montserrat-Regular'
    },
    box: {
        width,
        backgroundColor: '#1E1E1E',
        flexDirection: 'column',
        borderRadius: RFValue(20),
        marginTop: RFValue(5),
        paddingTop: RFValue(10),
        flex:3,
    },
    boldText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(17),
        color: 'white',
        margin: RFValue(20),
        marginTop: 10,
        marginBottom: RFValue(5),
    },
    lightText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(14),
        margin: RFValue(20),
        marginBottom: RFValue(10),
        color: '#989898',
    },
    normalText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(15),
        margin: RFValue(20),
        marginBottom: RFValue(5),
        color: '#989898',
    }
})

export { styles };

export default JoinSPM;