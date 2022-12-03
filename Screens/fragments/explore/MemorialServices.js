import React from "react";
import { View ,Text} from "react-native";
import RequestFormDetail from './RequestFormDetail';

const MemorialServices = () => {

    return(
        <View> 
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
