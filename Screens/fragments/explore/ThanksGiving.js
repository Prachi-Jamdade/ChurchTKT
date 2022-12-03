import React from "react";
import { View,Text } from "react-native";
import RequestFormDetail from './RequestFormDetail';

const ThanksGiving = () => {

    return(
        <View>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Time'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default ThanksGiving;