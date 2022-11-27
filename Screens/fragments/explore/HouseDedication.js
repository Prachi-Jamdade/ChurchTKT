import React from "react";
import { View } from "react-native-animatable";

const HouseDedication = () => {

    return(
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of House Owner'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default HouseDedication;