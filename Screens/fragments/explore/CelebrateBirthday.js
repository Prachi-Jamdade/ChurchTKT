import React from "react";
import { View } from "react-native-animatable";

const CelebrateBirthday = () => {

    return (
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of Birthday Person'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={"Father's Name"}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={"Mother's Name"}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Birthday Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Prefered celebration time'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default CelebrateBirthday;