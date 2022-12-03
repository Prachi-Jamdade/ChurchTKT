import React from "react";
import { View,Text } from "react-native-animatable";
import RequestFormDetail from './RequestFormDetail';

const HouseDedication = () => {

    return(
        <View>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of House Owner'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default HouseDedication;