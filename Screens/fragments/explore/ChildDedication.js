import React from "react";
import { View,RequestFormDetail } from "react-native-animatable";

const ChildDedication = () => {

    return(
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of Birthday Person'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={"Father's Name"}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={"Mother's Name"}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Date of Birth'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Event Date'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default ChildDedication;