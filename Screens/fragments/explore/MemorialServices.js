import React from "react";
import { View } from "react-native-animatable";

const MemorialServices = () => {

    return(
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of Deceased Person'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Date of Birth'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Date of Memorial'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Time of Memorial'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default MemorialServices;
