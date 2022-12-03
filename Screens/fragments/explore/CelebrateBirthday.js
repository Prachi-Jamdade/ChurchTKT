import React from "react";
import { View ,Text} from "react-native";
import RequestFormDetail from './RequestFormDetail';
import {Icons} from '../Icons'

const CelebrateBirthday = () => {

    return (
        <View>
            <RequestFormDetail 
            autoCompleteValue={'name'} 
            placeholderName={'Name of Birthday Person'}
            iconLeft= "eye"
            ></RequestFormDetail>
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