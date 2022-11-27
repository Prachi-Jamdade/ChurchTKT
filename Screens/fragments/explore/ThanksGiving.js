import React from "react";
import { View } from "react-native-animatable";

const ThanksGiving = () => {

    return(
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Time'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default ThanksGiving;