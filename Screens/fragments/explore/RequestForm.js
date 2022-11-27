import React from "react";
import {
    Dropdown
}
    from 'react-native-material-dropdown';

import CelebrateBirthday from "./CelebrateBirthday";

import ModalDropdown from 'react-native-modal-dropdown';

const RequestForm = () => {
    <View style={{ backgroundColor: '#0F0F0F', flex: 1 }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            margin: 2.5
        }}>

            <Ionicons name='chevron-forward-outline' size={27} color="white" padding={2} margin={5} />

            <Text style={{ color: "white", padding: 15, fontSize: 20, fontWeight: "400" }}>Account Details</Text>
        </View>


        <View>
            <Text>Choose the Service</Text>
            <ModalDropdown options={['Request Funeral Services', 'Celebrate Birthday', 'Organize Wedding', 'Child Dedications', 'House Dedications', 'Water Baptism', 'Thanks Giving', 'Memorial Services']} ></ModalDropdown>
        </View>

        <View>
            <CelebrateBirthday />
        </View>

        <TouchableOpacity style={styles.chatSupportBtn}
        // provide navigate path
            onPress={() => navigate('')}
            underlayColor='#fff'
        >
            <Text style={styles.loginText}>Continue</Text>
        </TouchableOpacity>

    </View>
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

export default RequestForm;
