import React from 'react';
import { View,Image,TouchableOpacity,Text,StyleSheet } from 'react-native';

const RequestSent = ({navigation}) => {
    return (
        <View>
            <Image
                source={require('../../assests/icons/RequestSent.png')}
                style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            />

            <Text>Request Sent</Text>

            <Text>Thank you so much for giving your valuable feedback</Text>

            <TouchableOpacity style={styles.chatSupportBtn}
            // provide naviate path
                onPress={() => navigation.navigate('')}
                underlayColor='#fff'
            >
                <Text style={styles.loginText}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    chatSupportBtn: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    loginText: {
        fontSize: 17,
        fontWeight: '500'
    }
})

export default RequestSent;