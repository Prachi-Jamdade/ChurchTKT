import React from "react";
import { View,Text } from "react-native-animatable";
import RequestFormDetail from './RequestFormDetail';

const FuneralService = () => {

    return(
        <View>
            <RequestFormDetail autoCompleteValue={'name'} placeholderName={'Name of Deceased Person'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'birthdate-full'} placeholderName={'Date of Birth'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Death Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Time of Death'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Funeral Date'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Funeral Time'}></RequestFormDetail>
            <RequestFormDetail autoCompleteValue={'postal-address'} placeholderName={'Address'}></RequestFormDetail>
            <RequestFormDetail placeholderName={'Contact no.'}></RequestFormDetail>
        </View>
    )
}

export default FuneralService;