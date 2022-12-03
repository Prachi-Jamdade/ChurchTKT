import React from "react";
import { View,Text } from "react-native";
import RequestFormDetail from './RequestFormDetail';

const WaterBaptism = () => {

    return(
        <View>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Date of Birth'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default WaterBaptism;