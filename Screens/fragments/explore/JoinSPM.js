import React from "react";
import { View, Text, TextInput, TouchableHighlight, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import gobalStyle from '../../styles/index';
import { AppContext } from '../../../context';
import { useState, useContext, useEffect } from "react";
import Icon, { Icons } from '../Icons';
import RadioButtonRN from "radio-buttons-react-native";

const JoinSPM = () => {

    const [data, setData] = useState({
        name: '',
        fatherName: '',
    });

    const { user } = useContext(AppContext);

    useEffect(() => {
        setData({ name: user.firstName + " " + user.lastName, phoneNo: user.phoneNumber })
    }, [user])

    const handleName = (text) => {
        // setData({ ...data, name: text });
    };

    const handleFatherName = (text) => {
        // setData({ ...data, fatherName: text });
    };

    const [amount, setAmount] = useState(0);

    const radioBtnData = [
        {
            label: 'Male'
        },
        {
            label: 'Female'
        }
    ]

    return (
        <SafeAreaView style={gobalStyle.main}>
            <View style={styles.container}>
                <View style={gobalStyle.nav}>
                    <View>

                        <Icon
                            style={{ paddingStart: 12 }}
                            type={Icons.MaterialIcons}
                            size={25}
                            name="arrow-back-ios"
                            color='white'
                        />
                    </View>
                    <Text style={gobalStyle.nav_header}>Help</Text>

                </View>

                <View style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', width: '100%', height: '100%', padding: 20 }}>
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

                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 16, margin: 10, color: 'white' }}>Gender</Text>
                    <RadioButtonRN data={radioBtnData}
                    selectedBtn={(e) => console.log(e)}
                    style={{backgroundColor: '#1E1E1E'}}
                    boxStyle={{backgroundColor: '#1E1E1E'}} />
                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 16, marginStart: 10, marginBottom: 10 }}>Enter the amount you want to commit: </Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Amount (in INR)"
                        placeHolderTextColor="#989898"
                        keyboardType="number-pad"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        value={amount}
                        onChangeText={(text) => { setAmount(text); }}
                    />

                    <TouchableHighlight
                        style={gobalStyle.btn_abs}
                    // onPress={() => { getOrder(); }}
                    >
                        <Text style={[gobalStyle.submitText]}>JOIN</Text>
                    </TouchableHighlight>
                </View>


            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        marginEnd: 10,
        height: 50,
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    boldText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        marginStart: 10,
        color: 'white',
    },
    lightText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        margin: 10,
        marginBottom: 10,
        color: '#989898'
    },
    normalText: {

    }
})

export { styles };

export default JoinSPM;