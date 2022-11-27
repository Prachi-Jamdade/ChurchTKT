import React from "react";
import { View } from "react-native-animatable";

const WaterBaptism = () => {

    return(
        <View>
            <Text>We need some details</Text>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Date of Birth'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default WaterBaptism;